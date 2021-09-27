$(document).ready(function() {

    // Firebase Form Handler
    // Initialize Firebase
    var config = {
        apiKey: "3eDYY1MDcxilUaFjJPLFClL2Ray53muLmKTro3rj",
        authDomain: "personal-website-401b2.firebaseapp.com",
        databaseURL: "https://personal-website-401b2-default-rtdb.firebaseio.com",
        projectId: "personal-website-401b2",
        storageBucket: "",
        messagingSenderId: "723536863439",
    };
    firebase.initializeApp(config);

    const firebaseForm = document.getElementById('firebaseForm');
    let isValid = false;

    firebaseForm.addEventListener('submit', function(event) {
        // Prevent Default form action
        event.preventDefault();
        // Validating form
        console.log(isValid);
        // Using Constraint API
        isValid = firebaseForm.checkValidity();
        console.log(isValid);
        if(!isValid){
            // Stlye main message for an error
            return;
        }else{
            console.log('Form Validated!');
            // Form validated, process to process data
            processData();
            // Reset form upon processing/sending data
            firebaseForm.reset();
            console.log("reset worked");
            return false;
        }
    });

    function processData() {

        // Grabbing user info
        var user_first_name = document.getElementById('first_name').value;
        var user_last_name = document.getElementById('last_name').value;
        var user_email = document.getElementById('email_address').value;
        var user_website = document.getElementById('website_type').value;
        // Creating a user object to send to DB
        var user_data = {
            First_Name: user_first_name,
            Last_Name: user_last_name,
            Email: user_email,
            Website_Type: user_website
        }
        var database = firebase.database();
        // Function to push user data to firebase DB
        FormSubmit(database, user_data);
    }
    // Form Submit
    function FormSubmit(database, user_data) {
        // Sending The Form Inputs to the db
        // Via the Folder I want to send the data to
        database.ref('leads').push(user_data);
    }
});