import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserDetails, type GithubUser } from "./Utils";

function Details() {
  const { username } = useParams();
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    if (!username) return;
    getUserDetails(username).then(setUser);
  }, [username]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-500">
      {user && (
        <div className="bg-white p-10 rounded-xl shadow-lg text-center">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">@{user.login}</p>
          <p className="mt-4">{user.bio}</p>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-700">
            <div><strong>{user.followers}</strong> Followers</div>
            <div><strong>{user.following}</strong> Following</div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            className="inline-block mt-6 text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Details