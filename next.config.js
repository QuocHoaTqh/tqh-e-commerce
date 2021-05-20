
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['cqUCRtXu2T637TJE26iVq4'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  