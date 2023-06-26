const putPost = async (event) => {
    const postTitle = document.getElementById('post-title').value.trim()
    const postBody = document.getElementById('post-body').value.trim()
    event.preventDefault()
    const postId = window.location.href.split('/')[4]
    // console.log();

    if (!postTitle || !postBody) {
        alert('please fill out all fields')
        return
    }
    const response = await fetch(`/post/${postId}/editPost`, {
        method: 'PUT',
        body: JSON.stringify({ postTitle, postBody ,postId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        console.log('success');
        document.location.replace(`/post/${postId}/`);
      } else {
        alert('failed to get!');
      }
}


document.getElementById('edit-post').addEventListener('click', putPost)