module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{html,ico,json,css,js}",
    "src/images/*.{jpg,png}"
  ],
  "swSrc": "public/sw-base.js",
  "swDest": "public/service-work.js",
  "globIgnores": [
    "../workbox-cli-config.js",
    "help/**"
  ]
};
