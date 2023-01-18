import { Manifest } from "deno-slack-sdk/mod.ts";
import ReactToMetadataWorkflow from "./workflows/react_to_metadata_workflow.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "deno-message-event",
  description:
    "A sample that demonstrates using the message posted event as a trigger to start a workflow",
  icon: "assets/default_new_app_icon.png",
  workflows: [ReactToMetadataWorkflow],
  outgoingDomains: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "channels:history",
    "reactions:write",
  ],
});
