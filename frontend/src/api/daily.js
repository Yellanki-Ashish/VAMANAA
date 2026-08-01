const BASE_URL = "http://127.0.0.1:8000";

export async function getDailySloka() {
  const response = await fetch(`${BASE_URL}/daily-sloka`);
  return await response.json();
}