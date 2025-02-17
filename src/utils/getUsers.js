const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/api/users`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
