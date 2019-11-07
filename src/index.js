// shows errors, does not fail with any exit code

function requireAll(requireContext) { requireContext.keys().map(requireContext); }
// eslint-disable-next-line no-undef
requireAll(require.context("../src", true, /.*\.js/));

// shows errors, fails with exit code 2

// eslint-disable-next-line no-undef
// require('./required/requiredFile.js')
