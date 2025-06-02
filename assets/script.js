// Check URL for OAuth token
const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('token');

if (token) {
  // Here you'd typically send token to your backend
  console.log("Received token: ", token);

  // Redirect or show success message
  window.location.href = 'https://quantumaixtrade-backend.onrender.com/success'; // or your dashboard
} else {
  console.log("No token found in URL.");
}
