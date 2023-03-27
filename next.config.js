module.exports = (phase) => {
  return {
    async redirects() {
      if (process.env.NODE_ENV === "development") {
        return [
          {
            source: "/",
            destination: "/api",
            permanent: false,
          },
          {
            source: "/index.html",
            destination: "/api",
            permanent: false,
          },
        ];
      } else {
        return [];
      }
    },
    reactStrictMode: true,
  };
};
