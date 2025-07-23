const repoName = 'serene-sprite'; 

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: 'export',
}

export default nextConfig