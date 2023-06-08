const postId = window.location.href.split('/')[4]
// console.log(postId);

 console.log('comment js');
const submitComment = async (event )=>{
  event.preventDefault();
  console.log('clicked');
  const comment_text = document.getElementById('comment-text').value.trim()
console.log(comment_text);
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
        alert('Failed to create comment!');
      }
    }
  
}
document.getElementById('submit-comment').addEventListener('click',submitComment)



