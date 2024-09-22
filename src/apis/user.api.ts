export const getUser = async () => {
  const data = await fetch("https://randomuser.me/api/");
  return data.json();
};
