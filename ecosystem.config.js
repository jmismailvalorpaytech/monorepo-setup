module.exports = {
  apps: [{
    script: './src/app.js',
    watch: ['src'], // Watches directories for changed
    watch_delay: 1000,
    ignore_watch: ["node_modules", "client/img", "client/node_modules"],
  }],
};
