const environmentConstants =
  import.meta.env.PROD === "production"
    ? {
        NODE_ENV: import.meta.env.PROD,
        API_URL: "http://54.174.72.35:3081",
      }
    : import.meta.env.PROD === "production"
    ? {
        NODE_ENV: import.meta.env.PROD,
        API_URL: "",
      }
    : {
        NODE_ENV: import.meta.env.PROD,
        API_URL: "http://54.174.72.35:3081",
      };

export const { NODE_ENV, API_URL } = { ...environmentConstants };
