const withAntdLess = require('next-plugin-antd-less');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = {
  ...nextConfig,
  ...withAntdLess({
    modifyVars: {
      '@primary-color': '#2db7f5'
    }
  })
};
