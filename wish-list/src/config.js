const environmentConstants =
  import.meta.env.VITE_NODE_ENV === "production"
    ? {
        NODE_ENV: import.meta.env.VITE_NODE_ENV,
        API_URL: "",
      }
    : import.meta.env.VITE_NODE_ENV === "production"
    ? {
        NODE_ENV: import.meta.env.VITE_NODE_ENV,
        API_URL: "",
      }
    : {
        NODE_ENV: import.meta.env.VITE_NODE_ENV,
        API_URL: "http://localhost:3080",
      };

export const { NODE_ENV, API_URL } = { ...environmentConstants };
