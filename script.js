const appId = '76613'; // ✅ Your Deriv App ID here

document.getElementById("derivLoginBtn").addEventListener("click", () => {
  const redirectUri = encodeURIComponent("https://oderobetty.github.io/quantumaixtrade-frontend/callback.html");
  const oauthUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&redirect_uri=${redirectUri}`;
  window.location.href = oauthUrl;
});
