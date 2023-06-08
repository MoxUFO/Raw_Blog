const postId = window.location.href.split('/')[4]
console.log(postId);


const submitComment = async (event )=>{
  event.preventDefault();
  const comment_text = document.getElementById('comment-text').value.trim();

  if (!comment_text) {
      alert('Please fill out all fields!')
      return;
  } else if (comment_text) {
      const response = await fetch(`/post/${postId}/comment`, {
        method: 'POST',
        body: JSON.stringify({comment_text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace(`/post/${postId}`);
      } else {
        alert('Failed to create post!');
      }
    }
  
}

const makeComment = async (event) =>{
  event.preventDefault()

  const response = await fetch(`/post/${postId}/comment`, {
    method: 'GET',
    // body: JSON.stringify({ post_title, post_text }),
    // headers: {
    //   'Content-Type': 'application/json',
    // },
  });

  if (response.ok) {
    console.log('success');
    document.location.replace(`/post/${postId}/comment`);
  } else {
    alert('failed to get!');
  }
}

document.getElementById('make-comment').addEventListener('click', makeComment)
document.getElementById('submit-comment').addEventListener('click',submitComment)
