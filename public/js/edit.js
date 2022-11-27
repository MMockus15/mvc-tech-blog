const post_id = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async (event) => {
	event.preventDefault();

	const title = document.querySelector('input[name="post-title"]').value;
	const body = document.querySelector('textarea[name="post-body"]').value;

	if (body && title) {
		const response = await fetch(`/api/post/${post_id}`, {
		method: 'PUT',
		body: JSON.stringify({
		title,
		body
	}),
		headers: {
		'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert('Failed to delete project');
	}
	}
};


const delButtonHandler = async (event) => {
	

	const response = await fetch(`/api/post/${post_id}`, {
		method: 'DELETE',
	});

	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert('Failed to delete project');
	}
	
};

document
	.querySelector('#edit-post-form')
	.addEventListener('submit', editFormHandler);

document
	.querySelector('#delete-btn')
	.addEventListener('click', delButtonHandler);
