// 4.	In a JavaScript file, write a program which checks the following things:
// a.	checks that the password is 12345678
// b.	if the password is incorrect, send an alert message
// c.	Your page should also include an <h1> tag. If the information in the form is correct, have JavaScript change the text in the <h1>.HTML page. It should include inputs for a username, email, and password. Also a submit button.


let key = '12345678';
let userN = document.getElementById("username").value;
let emailA = document.getElementById("email").value;
let passW = document.getElementById("password").value;



function password(e) {
    if ((passW == key) && (userN !== "") && (emailA !== "")) {
        document.getElementById("heading").innerHTML = "Correct Sign In";
        e.preventDefault();
        } else if ((passW !== "") && (userN == "") && (emailA == "") && (passW !== key)) {
            alert("fill in fields and wrong password")
            e.preventDefault();
        } else if ((passW == "") && (userN == "") && (emailA == "")) {
            alert("fill in fields ")
            e.preventDefault();
    } else {
        alert("Incorrect password");
        e.preventDefault();
    }

}

document.getElementById("submit").addEventListener("click", password);


