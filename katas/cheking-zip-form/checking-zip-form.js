function checkZIP() {
  // For each country, defines the pattern that the ZIP has to follow
  const constraints = {
    fr: ['^(F-)?\\d{5}$', `France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012`],
    de: ['^(D-)?\\d{5}$', `Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345`],
    ru: ['\\d{6}', `Russia ZIPs must have exactly 6 digits: e.g. 123456`],
    ch: ['^(CH-)?\\d{4}$', `Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950`],
    nl: ['^(NL)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$', ``],
  };

  const country = document.getElementById(`Country`).value;
  console.log('country: ', country);

  const ZIPField = document.getElementById(`ZIP`);
  console.log('ZIPField: ', ZIPField.value);

  const constraint = new RegExp(constraints[country][0], ``);
  console.log('constraint: ', constraint);

  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity(``);
  } else {
    console.log(constraints[country][1]);
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

const submit = document.getElementById(`Submit`);
submit.addEventListener(`click`, e => {
  e.preventDefault();
  checkZIP();
});
