// pm2 configuration for the production server
// Serves the built site (dist/) with `vite preview` on PORT (7777 by default).
module.exports = {
  apps: [
    {
      name: 'tonleu',
      script: 'node_modules/vite/bin/vite.js',
      args: `preview --host 0.0.0.0 --port ${process.env.PORT || 7777} --strictPort`,
      env_production: {
        NODE_ENV: 'production',
      },
      max_memory_restart: '300M',
    },
  ],
};
