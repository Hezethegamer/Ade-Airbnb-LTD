function onSignIn(googleUser) {
  // Access user info like profile, email, ID token
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;

  // Send user data to your server for authentication and account creation
  // ...

  // Redirect to welcome page or logged-in user dashboard
  window.location.href = "your-welcome-page-url";
}