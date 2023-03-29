import { API_URL } from "../config";
export const getHealthCheck = () =>
  fetch(`${API_URL}/healthcheck`).then((res) =>
    res.ok
      ? res.json().catch(() => "Ok")
      : res
          .json()
          .then((json) => Promise.reject({ status: res.status, data: json }))
  );
