const mongoose = require('mongoose');

const username = encodeURIComponent('ggrt0206');  // URL-encode the username
const password = encodeURIComponent('Nastrigo@19155101');  // URL-encode the password

const uri = `mongodb+srv://${username}:${password}@ggrt.nhsliij.mongodb.net/?retryWrites=true&w=majority&appName=GGRT`

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

module.exports = mongoose;
