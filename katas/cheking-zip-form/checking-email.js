const emailForCheck = document.getElementById(`emailForCheck`);
const emailForCheckSubmit = document.getElementById(`emailForCheckSubmit`);

function isEmailValid(value) {
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegExp.test(value);
}

function checkEmail() {
  if (isEmailValid(emailForCheck.value)) {
    console.log(`Email is valid`);
    emailForCheck.setCustomValidity(``);
  } else {
    console.log(`Email invalid`);
    emailForCheck.setCustomValidity(`Email invalid`);
  }
}


emailForCheckSubmit.addEventListener(`click`, e => {
  e.preventDefault();
  checkEmail();
});
