

const submitPost = async (event )=>{
    event.preventDefault();
    const post_title = document.getElementById('post-title').value.trim();
    const post_text = document.getElementById('post-body').value.trim();



    if (!post_title || !post_text) {
        alert('Please fill out all fields!')
        return;
    } else if (post_text && post_title) {
        const response = await fetch(`/makepost`, {
          method: 'POST',
          body: JSON.stringify({ post_title, post_text }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          console.log('ok');
          document.location.replace('/');
        } else {
          alert('Failed to create post!');
        }
      }
    
}

document.getElementById('submit-post').addEventListener('click', submitPost)