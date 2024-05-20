/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      "ssl.pstatic.net",
      "data1.pokemonkorea.co.kr",
      "s.pstatic.net",
      "jasonwatmore.com",
      "codeit-images.codeit.com",
      "codeit-frontend.codeit.com",
      "reactjs.org",
      "assets.vercel.com",
      "tanstack.com",
      "storybook.js.org",
      "testing-library.com",
      "static.cdninstagram.com",
      "codeit-front.s3.ap-northeast-2.amazonaws.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
