document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");
    var userName = document.getElementById("userName");
    var userEmail = document.getElementById("userEmail");
    var userAge = document.getElementById("userAge");
    var userNumber = document.getElementById("userNumber");
    var userLastName = document.getElementById("userLastName");
    var creditCard = document.getElementById("creditCard");

    if (userLastName.value.trim() === "") {
        document.getElementById("userLastNameError").textContent = "Enter your last name, please";
        userLastName.classList.add("error");
        event.preventDefault();
    } else {
        document.getElementById("userLastNameError").textContent = "";
        userLastName.classList.remove("error");
        userLastName.classList.add("success");
    }

    if (!creditCard.value.match(/^\d{16}$/)) {
        document.getElementById("creditCardError").textContent = "Enter a valid 16-digit credit card number.";
        creditCard.classList.add("error");
        event.preventDefault();
    } else {
        document.getElementById("creditCardError").textContent = "";
        creditCard.classList.remove("error");
        creditCard.classList.add("success");
    }
  
  
    if (userName.value.trim() === "") {
        document.getElementById("userNameError").textContent = "Enter your name please";
        userName.classList.add("error");
        event.preventDefault();
    } else {
        document.getElementById("userNameError").textContent = "";
        userName.classList.remove("error");
        userName.classList.add("success");
    }
  
    if (!userEmail.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("userEmailError").textContent = "Enter the corret email";
        userEmail.classList.add("error");
        event.preventDefault();
    } else {
        document.getElementById("userEmailError").textContent = "";
        userEmail.classList.remove("error");
        userEmail.classList.add("success");
    }
  
    if (isNaN(userAge.value) || userAge.value <= 0) {
        document.getElementById("userAgeError").textContent = "Enter the correct age";
        userAge.classList.add("error");
        event.preventDefault();
    } else {
        document.getElementById("userAgeError").textContent = "";
        userAge.classList.remove("error");
        userAge.classList.add("success");
    }
  
    if (!userNumber.value.match(/^\d+$/)) {
        document.getElementById("userNumberError").textContent = "Enter only numbers.";
        userNumber.classList.add("error");
        event.preventDefault();
    } else {
        document.getElementById("userNumberError").textContent = "";
        userNumber.classList.remove("error");
        userNumber.classList.add("success");
    }
  
    
    if (password.length < 8) {
        message.textContent = "The password must be at least 8 characters long.";
        event.preventDefault();
    } else if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        event.preventDefault();
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*()_+]/.test(password)) {
        message.textContent = "The password must contain uppercase and lowercase letters, numbers, and special characters.";
        event.preventDefault();
    } else {
        message.textContent = "";
    }
  
  });
  

  
 
  
