module.exports = {
  apps: [
    {
      name: 'vueblog',
      script: 'build/main.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy: {
    production: {
      user: 'root',
      host: '', // 服务器IP
      ref: 'origin/master',
      repo: 'git@github.com:wmui/vueblog.git',
      path: '/www/vueblog',
      'post-deploy': 'yarn && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
}
