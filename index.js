const Drone = require('drone-node');
const plugin = new Drone.Plugin();

plugin.parse().then((params) => {

  // gets build and repository information for
  // the current running build
  const build = params.build;
  const repo  = params.repo;

  // gets plugin-specific parameters defined in
  // the .drone.yml file
  const vargs = params.vargs;
  console.log(vargs);
});