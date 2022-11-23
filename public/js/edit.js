const editFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('input[name="post-title"]').value;
	const body = document.querySelector('textarea[name="post-body"]').value;

	await fetch(`/api/post/${postId}`, {
		method: 'PUT',
		body: JSON.stringify({
		  title,
		  body
		}),
		headers: {
		  'Content-Type': 'application/json'
		}
	  });
	
	  document.location.replace('/dashboard');
};


const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
	  const id = event.target.getAttribute('data-id');
  
	  const response = await fetch(`/api/post/${postId}`, {
		method: 'DELETE',
	  });
  
	  if (response.ok) {
		document.location.replace('/dashboard');
	  } else {
		alert('Failed to delete project');
	  }
	}
  };
  
  document
	.querySelector('#edit-post-form')
	.addEventListener('submit', editFormHandler);
  
  document
	.querySelector('#delete-btn')
	.addEventListener('click', delButtonHandler);
