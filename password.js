// 4.	In a JavaScript file, write a program which checks the following things:
// a.	checks that the password is 12345678
// b.	if the password is incorrect, send an alert message
// c.	Your page should also include an <h1> tag. If the information in the form is correct, have JavaScript change the text in the <h1>.HTML page. It should include inputs for a username, email, and password. Also a submit button.



let key = '12345678';


function password(e) {
    e.preventDefault();
    let userN = document.getElementById("username").value;
    let emailA = document.getElementById("email").value;
    let passW = document.getElementById("password").value;

    if ((passW !== "") && (emailA !== "") && (userN !== "")) {
        if (passW === key) {
            document.getElementById("heading").innerHTML = "Correct Sign In".fontcolor("green");
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Fill in all the fields");
    }

}

document.getElementById("submit").addEventListener("click", password);


