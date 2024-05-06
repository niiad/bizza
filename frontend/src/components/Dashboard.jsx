import React, { useState } from "react";

const dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}

      {isLoggedIn && <p>Hey friend, Welcome!</p>}
      {!isLoggedIn && <p>Please login to continue</p>}
    </div>
  );
};

export default dashboard;
