const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const path = require('path')
const ejs = require('ejs');
const fs = require('fs');
const crypto = require('crypto');
const mongoose = require('./db');
const BlogPost = require('./models/BlogPost');



// const blogData = require('/Users/HP/Documents/JS_eventBubbling_SetInterval/BlogData')


//!----------(SESSION COntRol)------------------

app.use('/public', express.static('public'))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(session({
    secret: '19155101',
    resave: false,
    saveUninitialized: false,
}));





let visitorData = {}; // Object to store visitor counts for each day

app.use((req, res, next) => {
    const today = new Date().toISOString().slice(0, 10); // Get today's date (YYYY-MM-DD)

        // Check if the request is for the favicon
        if (req.url === '/favicon.ico') {
            // Skip processing for favicon requests
            return next();
        }

    // Initialize visitor count for today if not already present
    if (!visitorData[today]) {
        visitorData[today] = {
            totalVisits: 0,
            pages: {}
        };
    }

    // Update total visits for today
    visitorData[today].totalVisits++;

    // Update visits for current page
    const path = req.path; // Get current path (e.g., '/blog', '/about', etc.)
    if (!visitorData[today].pages[path]) {
        visitorData[today].pages[path] = 0;
    }
    visitorData[today].pages[path]++;

    // Continue to the next middleware
    next();
});


//!---------------------(MAINTENANCE MODE)------------------------------

// Variable to track maintenance mode status
let maintenanceMode = false;

// Middleware to check maintenance mode
const checkMaintenanceMode = (req, res, next) => {
    if (maintenanceMode && req.path !== '/login' && req.path !== '/upload' && req.path !== '/toggle-maintenance' && req.path !== '/logout') {
        if (req.session.isAdminPawan) {
            next();
        }
        else {

            res.status(503).sendFile('/public/HTML/maintenance.html', { root: __dirname });
        }
    } else {
        next();
    }
};

app.use(checkMaintenanceMode);

// Route to toggle maintenance mode

app.post('/toggle-maintenance', (req, res) => {
    maintenanceMode = !maintenanceMode;
    res.redirect('/upload'); // Redirect back to the admin page after toggling
});

//!------------------------------(ADMIN LOGIN)---------------------

// Function to generate a unique salt
function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

// Function to hash password with salt
function hashPassword(password, salt) {
    const hash = crypto.createHmac('sha256', salt);
    hash.update(password);
    return hash.digest('hex');
}

// List of admins
const admins = [
    {
        username: 'phenomenon',
        salt: generateSalt(),
        img: 'https://i.postimg.cc/NMdXsGND/pawan2.jpg',
        isBanned: false,
        name: 'Pawan',

    },

    {
        username: 'PranavJainGhodu',
        salt: generateSalt(),
        img: 'https://i.postimg.cc/4yLMzWtz/Pranav.jpg',
        isBanned: false,
        name:'Pranav',

    },

    {
        username: 'HarshGymBoy',
        salt: generateSalt(),
        img: 'https://i.postimg.cc/RFT20SZp/Harsh.jpg',
        isBanned: false,
        name: 'Harsh',
    },

    {
        username: 'kratos',
        salt: generateSalt(),
        img: 'https://i.postimg.cc/3NJV4sy8/kratos.jpg',
        isBanned: false,
        name: 'Himanshu',
    },

    {
        username: 'Harshit',
        salt: generateSalt(),
        img: 'https://i.postimg.cc/d1zqsJQy/Harshit.jpg',
        isBanned: false,
        name: 'Harshit',
    },

    {
        username: 'GeneralFrank',
        salt: generateSalt(),
        img: 'https://www.logolynx.com/images/logolynx/s_4e/4e0664c4184e0b071036d3bd7b58a2b1.png',
        isBanned: false,
        name: 'Admin',
    }

];

// Set the initial passwords for admins
admins.forEach(admin => {
    if (admin.username === 'phenomenon') {
        admin.password = hashPassword('Nastrigo@6384', admin.salt);
    } else if (admin.username === 'PranavJainGhodu') {
        admin.password = hashPassword('Ghoda@l*da', admin.salt);
    } else if (admin.username === 'HarshGymBoy') {
        admin.password = hashPassword('GymBoy@Harsh', admin.salt);
    } else if (admin.username === 'kratos') {
        admin.password = hashPassword('Kratos@Pagare', admin.salt);
    } else if (admin.username === 'Harshit') {
        admin.password = hashPassword('MotaBhai@Harshit', admin.salt);
    }
    else if (admin.username === 'GeneralFrank') {
        admin.password = hashPassword('Franky@Super', admin.salt);
    }
    // Add more admins as needed
});


//login portal post request
app.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    
    var admin = admins.find(function (admin) {
        // return admin.username === username && admin.password === password;
        
        //!  salting
        if (admin.username === username && (!admin.isBanned)) {
            // Hash the provided password with the stored salt and compare
            var hashedPassword = hashPassword(password, admin.salt);
            return hashedPassword === admin.password;
        }
    });
    
    if (admin) {
        fs.appendFileSync("loginDetails.txt", `\n\nlogin: ${username} at ${new Date().toLocaleString()} `);
        req.session.AdminName = admin.username;
        req.session.adminImg = admin.img;
        req.session.isAdmin = true;
        req.session.name = admin.name;
        if (admin.username == 'phenomenon') {
            req.session.isAdminPawan = true;
        }
        
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.json({ success: false });
    }
});

function checkAdmin(req, res, next) {
    if (req.session.isAdmin) {
        
        next();
    } else {
        res.redirect('/login');
    }
}

//!---------------------(BAN/UNBAN USERS)---------------------------------

// Route to get all admin users
app.get('/admin/users', (req, res) => {
    res.json(admins);
});

// Route to ban/unban an admin user
app.post('/admin/ban', (req, res) => {
    const { username } = req.body;

    // Find the admin user by username
    const adminUser = admins.find(user => user.username === username);

    if (!adminUser) {
        return res.status(404).json({ message: 'Admin user not found' });
    }

    // Toggle the isBanned status
    adminUser.isBanned = !adminUser.isBanned;

    res.json({ message: `Admin user '${username}' ${adminUser.isBanned ? 'banned' : 'unbanned'}` });
});


//!--------------------(BLOGS AND UPLOAD)-------------------------------


app.use(express.urlencoded({ extended: true }));


app.get('/upload', checkAdmin, function (req, res) {
    res.render('upload', {
        adminIsPawan: req.session.isAdminPawan,
        isAdmin: req.session.isAdmin,
        maintain: maintenanceMode,
        AdminName: req.session.name,
    });
});


app.post('/upload', (req, res) => {
    let newPost = new BlogPost({
        title: req.body.title,
        images: req.body.images,
        caption: req.body.caption,
        description: req.body.description,
        date: new Date().toDateString(),
        time: new Date().toLocaleTimeString(),
        imagNum: req.body.img_num,
        AdminImg: req.session.adminImg,
    });

    console.log("new post : ",newPost)

    newPost.save()
        .then((savedPost) => {
            console.log('Post saved:', savedPost);
            res.redirect('/blog');
        })
        .catch(err => {
            console.error('Error saving post:', err);
            res.status(500).send('Error saving post');
        });
});


app.get('/blog', (req, res) => {
    let page = parseInt(req.query.page) || 0;
    let search = req.query.search || '';

    BlogPost.find({ title: { $regex: search, $options: 'i' } })
        .sort({ _id: -1 })
        .skip(page * 10)
        .limit(10)
        .then(posts => {
            res.render('blog', {
                req: req,
                posts: posts,
                page: page,
                isAdmin: req.session.isAdmin,
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).sendFile('/public/HTML/maintenance.html', { root: __dirname });
        });
});

app.get('/delete', checkAdmin, function (req, res) {
    let pid = req.query.id;
    console.log("post id : ", pid);

    BlogPost.findByIdAndDelete(pid)
        .then((result) => {
            if (result) {
                console.log("Post with id:", pid, "is deleted!");
            } else {
                console.log("Post with id:", pid, "not found!");
            }
            res.redirect('/blog');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error deleting post');
        });
});


/// Endpoint to handle POST requests to toggle like status
app.post('/like/:postId', async (req, res) => {
    const { postId } = req.params;
    const { isLiked } = req.body;

    try {
        const post = await BlogPost.findById(postId);

        if (!post) {
            return res.status(404).json({ success: false, error: 'Post not found' });
        }

        // Update like count based on isLiked flag
        if (isLiked) {
            post.likes++; // Increment like count
        } else {
            post.likes--; // Decrement like count
        }

        // Save updated post to database
        await post.save();

        res.json({ success: true });
    } catch (error) {
        console.error('Error toggling like:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

// Endpoint to fetch like count for a specific post
app.get('/like/count/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const post = await BlogPost.findById(postId);

        if (!post) {
            return res.status(404).json({ success: false, error: 'Post not found' });
        }

        res.json({ success: true, likeCount: post.likes });
    } catch (error) {
        console.error('Error fetching like count:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

//!---------------(Logout)---------------------------------------


app.get('/logout', function (req, res) {
    fs.appendFileSync("logoutDetails.txt", `\n\nlogout: ${req.session.AdminName} at ${new Date().toLocaleString()} `);
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/login');
        }
    });
});

//!----------------------------(Login Details Shown up)--------------------------------


// Define the path to logintext file
const loginDetails = path.join(__dirname, '/loginDetails.txt');


// Get the total number of lines in the file
const logintotalLines = fs.readFileSync(loginDetails, 'utf-8').split('\n').length;

// Keep track of the current position in the file (start from the end)
let logincurrentPosition = Math.max(logintotalLines - 20, 0); // Start reading from the last 20 lines

// Route to get the next 20 entries from the text file (reversed order)
app.post('/get-last-20-login-entries', (req, res) => {
    try {
        const fileContent = fs.readFileSync(loginDetails, 'utf-8');
        const allEntries = fileContent.split('\n');
        const nextEntries = allEntries.slice(logincurrentPosition, logincurrentPosition + 20);

        logincurrentPosition -= 20; // Update the position for the next request (move backward)

        // Reverse the order of entries (most recent first)
        const reversedEntries = nextEntries.reverse();

        res.send(reversedEntries.join('\n')); // Send the entries as a plain text response
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading file.');
    }
});

//!------------------(Logout Details SHown Up)--------------------------------

const logoutDetails = path.join(__dirname, '/logoutDetails.txt');

// Get the total number of lines in the file
const logouttotalLines = fs.readFileSync(logoutDetails, 'utf-8').split('\n').length;

// Keep track of the current position in the file (start from the end)
let logoutcurrentPosition = Math.max(logouttotalLines - 20, 0); // Start reading from the last 20 lines

app.post('/get-last-20-logout-entries', (req, res) => {
    try {
        const fileContent = fs.readFileSync(logoutDetails, 'utf-8');
        const allEntries = fileContent.split('\n');
        const nextEntries = allEntries.slice(logoutcurrentPosition, logoutcurrentPosition + 20);

        logoutcurrentPosition -= 20; // Update the position for the next request (move backward)

        // Reverse the order of entries (most recent first)
        const reversedEntries = nextEntries.reverse();

        res.send(reversedEntries.join('\n')); // Send the entries as a plain text response
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading file.');
    }
});

//!-------------------(Routings)---------------------

app.get('/login', (req, res) => {
    res.sendFile("/public/HTML/login.html", { root: __dirname })

})

app.get('/', (req, res) => {
    res.sendFile('public/HTML/Home.html', { root: __dirname });
});

app.get('/Home', (req, res) => {
    res.sendFile('public/HTML/Home.html', { root: __dirname });
});


app.get('/about', (req, res) => {
    res.sendFile('public/HTML/About.html', { root: __dirname });
});
app.get('/contact', (req, res) => {
    res.sendFile('public/HTML/contact.html', { root: __dirname });
});

app.get('/learnMore', (req, res) => {
    res.sendFile('public/HTML/LearnMore.html', { root: __dirname });
});

app.get('/analytics', (req, res) => {
    // Assuming you want to display analytics for the past 7 days
    const today = new Date().toISOString().slice(0, 10); // Today's date
    const last7Days = [];
    
    for (let i = 0; i < 30; i++) {
        let date = new Date();
        date.setDate(date.getDate() - i);
        last7Days.unshift(date.toISOString().slice(0, 10)); // Add date to the beginning of the array
    }

    const analyticsData = last7Days.map(date => {
        return {
            date: date,
            totalVisits: visitorData[date] ? visitorData[date].totalVisits : 0,
            pages: visitorData[date] ? visitorData[date].pages : {}
        };
    });
    
    if(req.session.isAdmin){

        res.render('analytics', { analyticsData: analyticsData });
    }else{
        res.redirect('/');
    }
});

//*for shared blogs
app.get('/blog/:postid', async (req, res) => {
    try {
        const postid = req.params.postid;
        const post = await BlogPost.findById(postid);

        if (post) {
            res.render('blogPost', {
                req: req,
                post: post,
                isAdmin: req.session.isAdmin,
            });
        } else {
            res.status(404).send('Post not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving post');
    }
});

app.get('*', (req, res) => {
    // Redirect to the home route (e.g., '/')
    res.redirect('/');
});


app.listen(3000, () => console.log('Server started on port 3000'));

