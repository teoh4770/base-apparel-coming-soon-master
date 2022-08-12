let submitBtn = document.querySelector(".js-submit-btn");
let emailInput = document.querySelector(".js-email-input");
let msg = document.querySelector(".js-email-message");
let iconDiv = document.querySelector(".js-email-icon");
let text = "";
let msgIcon = "";

// game plan: 
/*
  1. click on the button
  2. validate the email
  3. if not validate, then append the wrong message to the dom, make the outline red; else append the correct message
 */

submitBtn.addEventListener("click", () => {
  msg.style.display = "flex";
  let emailInput = document.querySelector(".js-email-input");
  let emailVal = emailInput['value'];
  let emailInputIsValid = emailInput.checkValidity();
  let valid = emailInputIsValid && validateEmail(emailVal);

  msgIcon = icon(valid);
  iconDiv.appendChild(msgIcon);
  console.log(msgIcon);

  if(valid) {
    console.log(`emailInputIsValid`);
    console.log(emailVal);
    text = "email input is valid!".toUpperCase();
    msg.textContent = text;
  }
  else {
    text = "email input is invalid!".toUpperCase();
    msgIcon = icon(valid);
    msg.textContent = text;
  }

  setTimeout(function() {
    msg.innerHTML = "";
    msg.style.display = "none";
    iconDiv.innerHTML = "";
  }, 5000);
});


function icon(isValid) {
  let icon = document.createElement("img");
  if(isValid) {
    icon.src = `images/icon-correct.svg`;
    icon.alt = `correct icon`;
  }
  else {
    icon.src = `images/icon-error.svg`;
    icon.alt = `error icon`;
  }
  return icon;
}


function validateEmail(email) {
  let isValidate = false;
  if(email) {
    isValidate =  (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test( email );
  }
  console.log(isValidate);
  return isValidate;
  
}

