window.onload = function() {
// Gets the sign up button
var signup = document.getElementById('signupSubmit');

// Gets the modal elements
var modal = document.getElementById('myModal');
var readmore = document.getElementById("readmore");
var closeModal = document.getElementsByClassName("close")[0];

// Event Listener for the form submit button (sign up)
signup.addEventListener("click", clearForm);


function clearForm(){
    document.getElementById('fname').innerHTML = "";
    document.getElementById('sname').innerHTML = "";
    document.getElementById('email').innerHTML = "";
    document.getElementById('gdpr').checked = false;
}

// Opens model 
readmore.onclick = function() {
    modal.style.display = "block";
}

// Closes the modal when user click X
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Function for handling clicks on the window, used for closing the modal
// besides using the X
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}

}