export const searchGithubUsers = async (usernames: string[]) => {
  const users = await Promise.all(
    usernames.map(async (username) => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user: ${username}`);
      }
      return response.json();
    })
  );
  return users;
};
