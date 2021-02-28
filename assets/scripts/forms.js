const authEvents = require('./auth/events')

const signUpHtml = `
<form id='sign-up'>
  <input name='credentials[email]' type='email' placeholder='Your Email' required>
  <input name='credentials[password]' type='password' placeholder='Enter password' required>
  <input name='credentials[password_confirmation]' type='password' placeholder='Confirm password' required>
  <button>
    Sign me up!
  </button>
</form>
`
const loginHtml = `
<form id='sign-in'>
  <input name='credentials[email]' type='email' placeholder='Your Email' required>
  <input name='credentials[password]' type='password' placeholder='Your Password' required>
  <button>
    Login
  </button>
</form>
`

const signOutHtml = `
<h4>Are you sure you want to leave?</h4><br>

<button id='yeeah'>Yes</button>
<button class='naah'>No</button>

`


module.exports = {
  signUpHtml,
  loginHtml,
  signOutHtml
}
