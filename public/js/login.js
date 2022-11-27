const loginFormHandler = async (event) => {
	event.preventDefault();

	// Collect values from the login form
	const userName = document.querySelector('#inputUserName');
	const password = document.querySelector('#inputPassword');
	console.log(userName, password);


	  // Send a POST request to the API endpoint
	const response = await fetch('/api/users/login', {
		method: 'POST',
		body: JSON.stringify({ userName: userName.value, password: password.value }),
		headers: { 'Content-Type': 'application/json' },
	});

	if (response.ok) {
		// If successful, redirect the browser to the profile page
		document.location.replace('/');
	} else {
		alert('failed to login');
	}
	};


document
	.querySelector('#login-event')
	.addEventListener('submit', loginFormHandler);

