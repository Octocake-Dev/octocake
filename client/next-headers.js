const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
];

async function headers() {
  return [
    {
      source: "/(.*)",
      headers: securityHeaders,
    },
  ];
}

module.exports = headers;
