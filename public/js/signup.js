const signupFormHandler = async function(event) {
	event.preventDefault();
  
	const userName = document.querySelector('#signupUserName');
	const password = document.querySelector('#signupPassword');
  
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
	};
  
  document
  .querySelector('#submit-btn-signup')
  .addEventListener('submit', signupFormHandler);