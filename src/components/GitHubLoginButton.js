// components/GithubLoginButton.js
const GithubLoginButton = () => {
  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
    const redirectUri = `${window.location.origin}/api/auth/callback`;
    const scope = 'public_repo';

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;
  };

  return <button onClick={handleLogin}>Login with GitHub</button>;
};

export default GithubLoginButton;
