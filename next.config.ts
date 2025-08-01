import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포 최적화
  output: 'standalone',
  
  // 이미지 최적화
  images: {
    domains: ['localhost'],
    unoptimized: false,
  },
  
  // 환경변수 에러 방지
  env: {
    DEMO_MODE: process.env.DEMO_MODE || 'true',
  },
  
  // 빌드 최적화
  experimental: {
    optimizeCss: true,
  },
  
  // 성능 최적화
  swcMinify: true,
  
  // 보안 헤더
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
