import { useState, useEffect } from "react";

const useGitHub = ({ username }) => {
  const [user, setUser] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const responseData = await response.json();
        setUser(responseData);
        setLoading(false);
      } catch (error) {
        seterror(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [username]);
  return [user, loading, error];
};

export default useGitHub;
