const signupFormHandler = async (event) => {
	event.preventDefault();
  
	const userName = document.querySelector('#signupUserName').value.trim();
	const password = document.querySelector('#signupPassword').value.trim();
  
	if (userName && password) {
	  const response = await fetch('/api/users', {
		method: 'POST',
		body: JSON.stringify({ userName, password }),
		headers: { 'Content-Type': 'application/json' },
	  });
  
	  if (response.ok) {
		document.location.replace('/dashboard');
	  } else {
		alert('failed to sign up');
	  }
	}
  };
  
  document
  .querySelector('#submit-btn-signup')
  .addEventListener('submit', signupFormHandler);