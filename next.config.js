/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    async headers() {
      return [
        {
          source: '/dynamic/header',
          headers: [
            {
                key: 'x-custom-header',
                value: 'my custom header value',
            }
          ]
        },
      ]
    }
}