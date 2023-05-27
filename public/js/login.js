const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.getElementById('log-in-email').value.trim();
  const password = document.getElementById('log-in-pw').value.trim();

  if (!email || ! password) {

    alert('Please Enter a valid email and password');
    return;
  } else if (email && password) {
    console.log(email+ " " + password);
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log('login good ready for homepage');
      document.location.replace('/');

    } else {
      alert(response.statusText);
    }
  }
};
// =======================================================================
const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.getElementById('username').value.trim();
  const signUpEmail = document.getElementById('sign-up-email').value.trim();
  const password = document.getElementById('sign-up-pw').value.trim();
  const confirmPassword = document.getElementById('sign-up-pw-confirm').value.trim()
if (!userName || !signUpEmail || !password || !confirmPassword) {
  alert('must fill all sign up field in order to complete sign up')
} else if (password !== confirmPassword) {
  alert("Passwords need to match fo sign up")
  return
} else if (userName && signUpEmail && password && confirmPassword) {
  console.log(userName);
  console.log(signUpEmail);
  console.log(password);
  console.log(confirmPassword);
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ userName, signUpEmail, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // console.log(' sign up good, ready for homepage');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};




document.getElementById('log-in-btn').addEventListener('click', loginFormHandler);

document.getElementById('sign-up-btn').addEventListener('click', signupFormHandler);
