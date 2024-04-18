document.getElementById("loginButton").addEventListener("click", function (event) {
  var email = document.getElementById("EmailAddress").value;
  var password = document.getElementById("Password").value;

  console.log("EmailAddress", email);

  console.log("Password", password);
  if (email === "" || password === "" ) {
    console.log("Email or password is not entered")
    document.getElementById("errormessage").textContent = "Please enter email and password";
    event.preventDefault();

  }
  else  {
    console.log("yesss")
    document.getElementById("errormessage").textContent = "";
        window.location.href = "index.html"
  }
});


