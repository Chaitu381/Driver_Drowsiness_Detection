// login_script.js

// Function to handle login button click
function handleLoginButtonClick() {
    // Redirect the user to the main page
    window.location.href = "main_page.html";
}

// Get the login button element
const loginButton = document.getElementById("loginButton");

// Add event listener to the login button
loginButton.addEventListener("click", handleLoginButtonClick);
