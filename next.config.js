const isProd = process.env.NODE_ENV === "production";
const repoName = "jingjingji.me";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
