export type GithubUser = {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
};

export async function getUserDetails(username: string): Promise<GithubUser> {
  const response = await fetch(`https://api.github.com/users/${username}`);
  
  if (!response.ok) {
    throw new Error("User not found or API error");
  }

  const data = await response.json();
  return data as GithubUser;
}