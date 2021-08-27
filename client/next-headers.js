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
    {
      source: "/fonts/inter-var-latin.woff2",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ];
}

module.exports = headers;
