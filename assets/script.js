document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('derivLoginBtn');

  loginBtn.addEventListener('click', () => {
    loginBtn.innerHTML = '<div class="loader"></div> Connecting...';
    loginBtn.disabled = true;

    const appId = '76613'; // your Deriv App ID
    const redirectUri = encodeURIComponent('https://oderobetty.github.io/chartbotaixtrade-/callback.html');

    const authUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&redirect_uri=${redirectUri}&response_type=token`;

    window.location.href = authUrl;
  });
});
