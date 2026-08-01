const BASE_URL = "http://127.0.0.1:8000";

export async function getProfile() {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}