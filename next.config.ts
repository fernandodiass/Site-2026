import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Gera a pasta 'out'
  images: {
    unoptimized: true, // Necessário para imagens em exportação estática
  },
  // Se o site for ficar numa subpasta (ex: domínio.com/portfolio), 
  // adiciona: basePath: '/portfolio',
};

export default nextConfig;