// FIRST WAY

// Create a new Proxy
let data = new Proxy({}, {
	set (obj, key, value) {

		// Update the property
		obj[key] = value;

		// Find the matching fields in the DOM
		let fields = document.querySelectorAll(`[name="${key}"]`);
    console.log('fields: ', fields);
		for (let field of fields) {
			field.value = value;
		}

		return true;

	}
});

// Event listener
// document.addEventListener('input', function (event) {

// 	// Only run on our forms
// 	if (!event.target.closest('[data-form-sync]')) return;

// 	// Update the data object
// 	data[event.target.name] = event.target.value;

// });



// SECOND WAY

document.addEventListener('input', function (event) {

	// Only run on our forms
	if (!event.target.closest('[data-form-sync]')) return;

	// Find the matching fields in the DOM
  let fields = document.querySelectorAll(`[name="${event.target.name}"]`);

  for (let field of fields) {
    field.value = event.target.value;
  }
});
