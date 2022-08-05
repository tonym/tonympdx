const sanityClient = require("@sanity/client");

const sanity = {
  apiVersion: '2021-08-31',
  dataset: 'production',
  projectId: '5pnyimif',
  useCdn: false
}

module.exports = sanityClient({...sanity});
