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

const deleteComment = async (event) => {
  event.preventDefault()
  console.log(event.target.dataset.commentCode);
  let commentCode = event.target.dataset.commentCode
  console.log(event.target.dataset.commentCode);
  const response = await fetch(`/post/${postId}/comment`, {
    method: 'DELETE',
    body: JSON.stringify({ commentCode }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  if (response.ok) {
    console.log('success');
    document.location.replace(`/post/${postId}`);
  } else {
    alert('failed to get!');
  }
}

const editPost = async (event) => {
  event.preventDefault()
  console.log(event);
  // let commentCode = event.target.dataset.commentCode
  // console.log(event.target.dataset.commentCode);
  const response = await fetch(`/post/${postId}/editPost`, {
    method: 'GET',
    // body: JSON.stringify({ commentCode }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response);
  if (response.ok) {
    console.log('success');
    document.location.replace(`/post/${postId}/editPost`);
  } else {
    alert('failed to get!');
  }
}


document.getElementById('make-comment').addEventListener('click', renderComment)
document.getElementById('edit-post').addEventListener('click',editPost)
document.getElementById('delete-post').addEventListener('click', deletePost)
document.getElementById('delete-comment').addEventListener('click', deleteComment)

