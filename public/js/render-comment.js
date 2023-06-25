const postId = window.location.href.split('/')[4]

const renderComment = async (event) =>{
  event.preventDefault()

  const response = await fetch(`/post/${postId}/comment`, {
    method: 'GET',
    // body: JSON.stringify({ post_title, post_text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('success');
    document.location.replace(`/post/${postId}/comment`);
  } else {
    alert('failed to get!');
  }
}

const deletePost = async (event)=>{
  event.preventDefault()
  console.log(event);
  const response = await fetch(`/post/${postId}`, {
    method: 'DELETE',
    // body: JSON.stringify({ post_title, post_text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  if (response.ok) {
    console.log('success');
    document.location.replace(`/`);
  } else {
    alert('failed to get!');
  }

}

document.getElementById('delete-post'). addEventListener('click', deletePost)
document.getElementById('make-comment').addEventListener('click', renderComment)

