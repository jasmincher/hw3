// 4.	In a JavaScript file, write a program which checks the following things:
// a.	checks that the password is 12345678
// b.	if the password is incorrect, send an alert message
// c.	Your page should also include an <h1> tag. If the information in the form is correct, have JavaScript change the text in the <h1>.HTML page. It should include inputs for a username, email, and password. Also a submit button.

var password = 1234578;

function password() {
    if (document.getElementById("password").value === password) {
        document.getElementById("sign-in").innerHTML = "Correct Sign In";
    }else{
        alert("Incorrect password");
    }
}