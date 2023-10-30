/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: "export",
  images: {
   // unoptimized: true,
    domains: ['images.unsplash.com', 'cdn.rareblocks.xyz',"amyrelle.com","www.guerlain.com","uploads-ssl.webflow.com","tailwindui.com"],
  },

  
}

module.exports = nextConfig
