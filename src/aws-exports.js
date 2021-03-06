// `aws-exports.json` is auto-generated by the amplify CLI
// and it contains metadata such as the endpoint to query.
// We override it for local development to point at
// localhost:3050 where we run a copy of the API.
const awsmobile = {
  aws_project_region: 'us-west-2',
  aws_cloud_logic_custom: [
    {
      name: 'resolverAPI',
      // Run `yarn backend` to boot up the API server on this port.
      endpoint: 'http://localhost:3050',
      region: 'us-west-2',
    },
  ],
}

export default awsmobile
