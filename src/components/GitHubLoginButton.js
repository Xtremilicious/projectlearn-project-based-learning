// components/GithubLoginButton.js
import { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';

const GithubLoginButton = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
      console.log(sessionData);
    };

    fetchSession();
  }, []);

  const handleLogin = () => {
    // Redirect to the NextAuth authentication route
    window.location.href = '/api/auth/signin/github';
  };

  const handleLogout = () => {
    window.location.href = '/api/auth/signout';
  };

  return (
    <>
      {session ? (
        <div>
          <h2>Welcome, {session.user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with GitHub</button>
      )}
    </>
  );
};

export default GithubLoginButton;
