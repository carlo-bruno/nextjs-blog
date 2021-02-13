const dev = process.env.NODE_ENV !== 'production';

export const server: String = dev
  ? 'http://localhost:3000'
  : 'https://www.website.com';
