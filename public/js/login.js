const loginFormHandler = async (event) => {
	event.preventDefault();
  
	// Collect values from the login form
	const userName = document.querySelector('#inputUserName').value.trim();
	const password = document.querySelector('#inputPassword').value.trim();
  
	if (userName && password) {
	  // Send a POST request to the API endpoint
	  const response = await fetch('/api/users/login', {
		method: 'POST',
		body: JSON.stringify({ userName, password }),
		headers: { 'Content-Type': 'application/json' },
	  });
  
	  if (response.ok) {
		// If successful, redirect the browser to the profile page
		document.location.replace('/dashboard');
	  } else {
		alert('failed to login');
	  }
	}
  };
  

  document
	.querySelector('#submit-btn-login')
	.addEventListener('submit', loginFormHandler);
  
 