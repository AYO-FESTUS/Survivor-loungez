// sanity.js (or sanityClient.js, however you named it)
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'mzjggqow',   // replace with your actual ID
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-07-05',     // use current date or Sanity API version
});

export default client;
