const postId = window.location.href.split('/')[4]

const renderComment = async (event) =>{
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
document.getElementById('make-comment').addEventListener('click', renderComment)

