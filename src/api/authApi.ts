//"https://dummyjson.com/auth/login";
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  mobile: string;
  address: string;
}

export async function login(loginCredentials: LoginCredentials) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginCredentials),
  });
  return response.json();
}

export async function register(registerCredentials: RegisterCredentials) {
  const response = await fetch("https://dummyjson.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerCredentials),
  });
  return response.json();
}
