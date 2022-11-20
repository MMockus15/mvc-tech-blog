const signupFormHandler = async (event) => {
	event.preventDefault();
  
	const email = document.querySelector('#signupEmail').value.trim();
	const password = document.querySelector('#signupPassword').value.trim();
  
	if (email && password) {
	  const response = await fetch('/api/users', {
		method: 'POST',
		body: JSON.stringify({ email, password }),
		headers: { 'Content-Type': 'application/json' },
	  });
  
	  if (response.ok) {
		document.location.replace('/dashboard-routes');
	  } else {
		alert('failed to sign up');
	  }
	}
  };
  
  document
  .querySelector('#submit-btn-signup')
  .addEventListener('submit', signupFormHandler);