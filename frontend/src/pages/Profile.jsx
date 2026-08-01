import { useEffect, useState } from "react";

import { getProfile } from "../api/profile";

import LogoutButton from "../components/auth/LogoutButton";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const data = await getProfile();

      if (data.success) {
        setUser(data);
      }
    }

    loadProfile();
  }, []);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-3xl font-bold text-orange-600 mb-8">
        👤 My Profile
      </h1>

      <div className="space-y-5">

        <div>
          <p className="text-gray-500">Username</p>
          <h2 className="text-xl font-semibold">
            {user.username}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Email</p>
          <h2 className="text-xl font-semibold">
            {user.email}
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Membership</p>
          <h2 className="text-xl font-semibold">
            Free User
          </h2>
        </div>

        <div>
          <p className="text-gray-500">AI Chats</p>
          <h2 className="text-xl font-semibold">
            0
          </h2>
        </div>

        <div>
          <p className="text-gray-500">Favorite Verses</p>
          <h2 className="text-xl font-semibold">
            0
          </h2>
        </div>

      </div>

      <div className="mt-8">
        <LogoutButton />
      </div>

    </div>
  );
}

export default Profile;