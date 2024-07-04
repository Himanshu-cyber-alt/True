// document.getElementById("numFields").addEventListener("change", function () {
//   var numFields = this.value;

//   var container = document.getElementById("img_src");
//   container.innerHTML = '';

//   for (var i = 0; i < numFields; i++) {
//     var labelImg = document.createElement("label");
//     labelImg.setAttribute("for", "img" + i);
//     labelImg.textContent = "Image Url " + (i + 1);

//     var inputImg = document.createElement("input");
//     inputImg.type = "url";
//     inputImg.name = "image[]";
//     inputImg.id = "post_src" + i;
//     inputImg.placeholder = "Image Url";
//     inputImg.className = "textbox";
//     // inputImg.required();
//     inputImg.required = true;
//     inputImg.addEventListener("change", function () {
//       images[i] = this.value;
//     });

//     var labelCaption = document.createElement("label");
//     labelCaption.setAttribute("for", "caption" + i);
//     labelCaption.textContent = "Caption " + (i + 1);

//     var inputCaption = document.createElement("input");
//     inputCaption.type = "text";
//     inputCaption.name = "caption[]";
//     inputCaption.id = "post_caption" + i;
//     inputCaption.placeholder = "Caption";
//     inputCaption.className = "textbox";
//     inputCaption.addEventListener("change", function () {
//       captions[i] = this.value;
//       inputCaption.value = (i + 1);
//     });

//     container.appendChild(labelImg);
//     container.appendChild(inputImg);
//     container.innerHTML += "<br>"
//     container.appendChild(labelCaption);
//     container.appendChild(inputCaption);
//     container.innerHTML += "<br>"
//     container.innerHTML += "<br>"
//   }
// })
// Assuming you have an async function to fetch image URLs from the database

let result = document.getElementById("result");
const imageUrls = [];

async function uploadImages() {

  //check if description is empty!!
  const description = document.getElementById('post_description').value.trim();
    
    if (!description) {
        alert('Please enter a description.');
        return;
    }


  //show uploading if all works out
  result.innerHTML = "<br><center> ...uploading... </center>";
  const form = document.getElementById('uploadForm');
  console.log("fetching urls...");
  const input = document.getElementById('imageInput');
  const files = input.files; // Get all selected files

  if (files.length > 0 &&  description) {
    const apiKey = '528238665667c9452b7443b915ff2771'; // Replace with your ImgBB API key
    const apiUrl = 'https://api.imgbb.com/1/upload';

    try {
      // Loop through each selected file
      for (const file of files) {
        const formData = new FormData();
        formData.append('image', file);
        formData.append('key', apiKey);

        const response = await fetch(apiUrl, {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not OK');
        }

        const data = await response.json();
        if (data.data && data.data.url) {
          const imageUrl = data.data.url;
          imageUrls.push(imageUrl); // Store the URL in the array
        } else {
          console.error('Error uploading image:', data);
        }
        console.log("urls: ", imageUrls);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // After attempting to upload all images, send the collected URLs (if any) to your server
  sendImageUrlsToServer(imageUrls);
}

function sendImageUrlsToServer(urls) {
  // Prepare the data to send to the server
  const postData = {
    title: document.getElementById('post_title').value,
    description: document.getElementById('post_description').value,
    images: urls, // Array of image URLs
    caption: "", // You might want to add caption handling here
    img_num: urls.length, // Number of images uploaded
    // Add any additional data you want to send to the server
  };

  // Make a POST request to your server endpoint
  fetch('/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
  .catch(error => {
    console.error('Error:', error);
  });

  
 result.innerHTML =  "<br><center> <b> ...uploaded successfully!... <b></center>";
}


 


  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not OK');
  //   }
  // })
  // .then(data => {
  //   console.log('Server response:', data);
  //   // Handle response from server if needed
  //   if (data.redirectUrl) {
  //     window.open(data.redirectUrl, '_blank');
  //   }
  // })
  // .catch(error => {
  //   console.error('Error sending data to server:', error);
  // });


//---------------------------------------------------------------

let moreClk = false;
document.getElementById("MoreOpt").addEventListener("click", () => {
  if(!moreClk){
  document.getElementById("MoreDisplay").style.removeProperty("display");
  moreClk = true;
  }
  else{
    document.getElementById("MoreDisplay").style.display = "none";
    moreClk = false
  }

})

//-------------------------------------------------------------------

// Function to toggle ban/unban
async function toggleBan(username, action) {
  if (username !== "phenomenon")
    try {
      const response = await fetch('/admin/ban', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      });

      const data = await response.json();
      console.log(data.message);

      
      fetchAdminUsers();
    } catch (error) {
      console.error('Error toggling ban:', error);
    }
}


  // Function to fetch admin users and update UI
  async function fetchAdminUsers() {
    try {
      const response = await fetch('/admin/users');
      const adminUsers = await response.json();

      const adminListDiv = document.getElementById('adminList');
      adminListDiv.innerHTML = ''; // Clear previous list

      adminUsers.forEach(user => {
        const banButtonText = user.isBanned ? 'Unban' : 'Ban';
        const banButtonAction = user.isBanned ? 'unban' : 'ban';

        const userDiv = document.createElement('div');
        userDiv.innerHTML = `
                        <p>${user.username} - ${user.isBanned ? 'Banned' : 'Active'}</p>
                        <button class="BanUnban" onclick="toggleBan('${user.username}', '${banButtonAction}')">${banButtonText}</button>
                        <hr>
                    `;
        adminListDiv.appendChild(userDiv);
      });
    } catch (error) {
      console.error('Error fetching admin users:', error);
    }
  }


  // Initial fetch of admin users
  fetchAdminUsers();
  
  




//-----------------------------------------------------------------------------------

//* fun to logout all users
async function logoutAllUsers() { 

  

}

//--------------------------------------------------------------------------------------------

//* Maintainence page shown up
let maintain = false;
function showMaintenancePage() {
  if (!maintain) {

    //maintain code
    document.querySelector(".Maintenance").innerHTML = "no maintain";
    maintain = true;
  }
  else {
    document.querySelector(".Maintenance").innerHTML = "maintain";
    maintain = false;
  }
  // Redirect to maintenance page (if needed)
  // ...
}

//------------------------------------------------------------------------------------

async function viewLogins() {
  try {
    const response = await fetch('/get-last-20-login-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/txt'
      },

    });
    const data = await response.text();
    document.getElementById('loginLogs').innerText = data;
  }

  catch (error) {
    console.error('Error finding entries:', error);
  }
}

//------------------------------------------------------------------------------

async function viewLogouts() {
  try {
    const response = await fetch('/get-last-20-logout-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/txt'
      },

    });
    const data = await response.text();
    document.getElementById('logoutLogs').innerText = data;
  }

  catch (error) {
    console.error('Error finding entries:', error);
  }
}


//! automatically logout user after 30mins

setTimeout(()=>{
  window.location.href='/logout';},1800000);
