const registerUrl = "https://skypro-music-api.skyeng.tech/user/signup/";

export const registerUser = async ({ email, password, username }) => {

  const response = await fetch(registerUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      "content-type": " application/json",
    },
  });
  if (response === 400) {
    throw new Error( "Пользователь с таким адрес электронной почты уже существует.")
  }
  return response.json();
} 


const loginUrl = "https://skypro-music-api.skyeng.tech/user/login/";
export const loginUser = async ({ email, password }) => {
  const response = await fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": " application/json",
    },
  });
  return response.json();
};

const tokenUrl = "https://skypro-music-api.skyeng.tech/user/token/";
export const getUserToken = async ({ email, password }) => {
  const response = await fetch(tokenUrl, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "content-type": " application/json",
    },
  });
  return response.json();
};
