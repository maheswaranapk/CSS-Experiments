const withSass = require("@zeit/next-sass");
module.exports = withSass({
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/linear-reveal': { page: '/linear-reveal' },
      '/hover-flip': { page: '/hover-flip' },
      '/text-push': { page: '/text-push' },
      '/day-night': { page: '/day-night' },
      '/shadow-util': {page: '/shadow-util'},
      '/planet': {page: '/planet'},
      '/day-night-switch': {page: '/day-night-switch'},
      '/creative-css/envelope': {page: '/creative-css/envelope'}
    };
  },
});
