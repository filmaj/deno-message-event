import { Trigger } from "deno-slack-api/types.ts";
import ReactToMetadataWorkflow from "../workflows/react_to_metadata_workflow.ts";

/**
 * Triggers determine when Workflows are executed. A trigger
 * file describes a scenario in which a workflow should be run,
 * such as a user pressing a button or when a specific event occurs.
 * https://api.slack.com/future/triggers
 */
const messagePostedEventTrigger: Trigger<
  typeof ReactToMetadataWorkflow.definition
> = {
  type: "event",
  name: "Email Message Posted",
  description: "Reacji to a message if it contains a slack.com email",
  workflow: "#/workflows/react_to_metadata_workflow",
  inputs: {
    channel: {
      value: "{{data.channel_id}}",
    },
    ts: {
      value: "{{data.message_ts}}",
    },
  },
  event: {
    event_type: "slack#/events/message_posted",
    channel_ids: ["C02ARJE6XNU"],
    filter: {
      version: 1,
      root: {
        statement: "{{data.text}} CONTAINS @slack.com",
      },
    },
  },
};

export default messagePostedEventTrigger;
