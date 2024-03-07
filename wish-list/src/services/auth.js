import { API_URL } from "../config";
export const signIn = () =>
  fetch(`${API_URL}/signin`).then((res) =>
    res.ok
      ? res.json().catch(() => "Ok")
      : res
          .json()
          .then((json) => Promise.reject({ status: res.status, data: json }))
  );
