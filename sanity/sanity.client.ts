import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "aupy9owj",
  dataset: "production",
  apiVersion: "2023-08-05",
  useCdn: false,
};

const client = createClient(config);

export default client;
