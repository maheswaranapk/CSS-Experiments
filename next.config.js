const withSass = require("@zeit/next-sass");
module.exports = withSass({
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/linear-reveal': { page: '/reveal/linear-reveal' },
      '/reveal/linear-reveal': { page: '/reveal/linear-reveal' },
      '/hover-flip': { page: '/reveal/hover-flip' },
      '/reveal/hover-flip': { page: '/reveal/hover-flip' },
      '/text-push': { page: '/reveal/text-push' },
      '/reveal/text-push': { page: '/reveal/text-push' },
      '/day-night': { page: '/screen/day-night' },
      '/screen/day-night': { page: '/screen/day-night' },
      '/planet': {page: '/screen/planet'},
      '/screen/planet': {page: '/screen/planet'},
      '/day-night-switch': {page: '/component/day-night-switch'},
      '/component/day-night-switch': {page: '/component/day-night-switch'},
      '/envelope': {page: '/reveal/envelope'},
      '/reveal/envelope': {page: '/reveal/envelope'},
      '/dribbble-logo-reveal': {page: '/reveal/dribbble-logo'},
      '/reveal/dribbble-logo': {page: '/reveal/dribbble-logo'},
      '/reveal/google-photos-new-logo': {page: '/reveal/google-photos-new-logo'},
      '/illustration/movie-reel': {page: '/illustration/movie-reel'},
      '/illustration/towel': {page: '/illustration/towel'},
      '/illustration/avengers-logo': {page: '/illustration/avengers-logo'},
      '/shadow-util': {page: '/shadow-util'}
    };
  },
});
