const buttonSubmit = document.querySelector("#subscribe"); // Assuming subscribe button ID
const inputElement = document.querySelector("#email");
const errorMessageElement = document.querySelector("#error-message");

function validateEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

inputElement.addEventListener("input", () => {
const email = inputElement.value;
if (email) {
    inputElement.style.border = "3px solid green"; // Green border for non-empty input
} else {
    inputElement.style.border = ""; // Reset border to default for empty input
}
});

buttonSubmit.addEventListener("click", () => {
const email = inputElement.value;
const isValid = validateEmail(email);

if (isValid) {
    errorMessageElement.innerHTML = ""; // Clear error message
    // Add your logic for successful email submission (optional)

    // Timeout to clear input and error message after 2 seconds
    setTimeout(() => {
    inputElement.value = "";
    document.querySelector("#email").style.border = "";
errorMessageElement.innerHTML = "";
    }, 2000);
} else {
    inputElement.style.border = "1px solid red"; // Red border for invalid email
    errorMessageElement.innerHTML = "Please enter a valid email address."; // Display error message

    // Timeout to clear error message and value after 2 seconds
    setTimeout(() => {
    errorMessageElement.innerHTML = "";
    document.querySelector("#email").style.border = "";
    inputElement.value = "";
    }, 2000);
}
});
