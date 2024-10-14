// components/GithubLoginButton.js
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";

import { Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { analytics } from "@/lib/analytics";

const GithubLoginButton = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  const handleLogin = () => {
    // Redirect to the NextAuth authentication route
    //window.location.href = "/api/auth/signin/github";
    analytics.track("Sign In Clicked", {});
    signIn("github");
  };

  const handleLogout = () => {
    //window.location.href = "/api/auth/signout";
    analytics.track("Sign In Clicked", {
      user: session?.user,
    });
    signOut();
  };

  return (
    <div>
      {session ? (
        <div className="flex flex-col items-end mb-8">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">
              Welcome, {session.user.name}
            </h2>
            <Avatar>
              <AvatarImage src={session.user.image} alt="User Avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <button
            onClick={handleLogout}
            className="underline mt-2 cursor-pointer"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              Please{" "}
              <span onClick={handleLogin} className="underline cursor-pointer">
                log in
              </span>{" "}
              using your GitHub account to add projects directly.
            </AlertDescription>
          </Alert>
        </>
      )}
    </div>
  );
};

export default GithubLoginButton;
