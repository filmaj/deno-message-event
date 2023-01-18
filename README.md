# Deno Message Posted Event Slack App

## Quickstart

1. Install this app to a workspace
2. Customize the channel ID that you want this app to listen to messages in by changing the `channel_ids` line appropriately within `triggers/message_event_trigger.ts` (~line 27).
  - Optionally, you can also customize what specific text will trigger the workflow in this app by changing the `statement` line in the trigger file too. Currently this app listens for `@slack.com` content to be present in messages. Change this if you want!
3. Create a message posted event trigger for your app by running: `slack triggers create --trigger-def ./triggers/message_event_trigger.ts`
4. Invite the app to the channel that you specified its ID in in step 2.
5. Post a message to that channel that includes the trigger text (`@slack.com` by default).
6. The app should react to the message with an `:email:` emoji.
