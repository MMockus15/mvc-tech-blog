const commentFormEl = async function(event) {
	event.preventDefault();

	const post_id = document.querySelector('input[name="post-id"]').value;
	const body = document.querySelector('textarea[name="comment-body"]').value;

	
		await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({
				post_id,
				body
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		document.location.reload();
	
};

document
.querySelector('#new-comment-form')
.addEventListener('submit', commentFormEl);