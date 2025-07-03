import withBundleAnalyzer from '@next/bundle-analyzer'

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp'],
  },
}

export default withAnalyzer(nextConfig)