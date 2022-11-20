const signupFormHandler = async function(event) {
	event.preventDefault();
  
	const userName = document.querySelector('#signupUserName');
	const password = document.querySelector('#signupPassword');
  
	  const response = await fetch('api/users', {
		method: 'POST',
		body: JSON.stringify({ userName: userName.value, password: password.value }),
		headers: { 'Content-Type': 'application/json' },
	  });
  console.log(response);
	  if (response.ok) {
		document.location.replace('/');
	  } else {
		alert('failed to sign up');
	  }
	};
  
  document
  .querySelector('#submit-btn-event')
  .addEventListener('submit', signupFormHandler);