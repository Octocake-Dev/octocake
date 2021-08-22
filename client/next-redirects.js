async function redirects() {
  return [
    {
      source: "/settings",
      destination: "/settings/profile",
      permanent: true,
    },
  ];
}

module.exports = redirects;
