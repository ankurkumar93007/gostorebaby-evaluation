// when user clicks buy now button -> show alert
document.getElementById('buy-now').addEventListener('click', function() {
  alert("Thank you for your interest in Baby Car Camera!");
});

// signup form handling
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault(); // stop page reload
  var email = document.getElementById('email').value.trim();

  // simple email check using regex
  if(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Thank you for signing up, " + email + "!");
    document.getElementById('signup-form').reset(); // clear the form
  } else {
    alert("Please enter a valid email address.");
  }
});
