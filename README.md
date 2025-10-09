# Chat Client - Working with Sockets Example

A lightweight browser-based chat interface built with **TypeScript**, **Sass**, and the native **WebSocket API**.  
This client connects to a WebSocket server and provides a simple, real-time chat-like UI where users can set a display name, send messages, and see connection state updates.

## Features

- Real-time messaging via WebSockets
- Clean UI with connected / disconnected themes
- Styles written in Sass (compiled to CSS)
- Modular TypeScript architecture
- Helpful UI utilities for buttons, inputs, and state toggling
- Live display of messages in a chat window

## UI Overview

| Section             | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| Socket State        | Displays current WebSocket connection status.                           |
| Display Name        | Allows users to set a custom username to display when sending messages. |
| Connection Controls | Connect/Disconnect buttons toggle WebSocket connection.                 |
| Chat Window         | Displays incoming/outgoing messages and when users connect/disconnect.  |
| Chat Controls       | Text area and send button for sending messages.                         |
| Theme Change        | Design changes depending on WebSocket connection status.                |

## UX Overview

| State            | UI Behaviour                                                                                                                                                                                                                                                                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Disconnected** | - "Send" button and message textarea are **disabled**.<br> - "Connect" button is **enabled**.<br> - "Disconnect" button is **disabled**. <br> - Users cannot submit messages without connecting first.<br>- "Display Name" input remains **editable** so the user can set or change their name before connecting. <br> - Socket state changes to "Connected". |
| **Connected**    | - "Send" button and message textarea are **enabled**.<br>- "Connect" button is **disabled**.<br>- "Disconnect" button is **enabled**.<br>- "Display Name" input becomes **read-only** to prevent changes mid-session. <br> - Socket state changes to "Disconnected"                                                                                           |

## Development

### Install dependencies

```
npm install
```

### Run TypeScript watcher

```
npm run ts:watch
```

### Run SASS watcher

```
npm run sass:watch
```

### Build project

Removes the dist folder and re-builds TypeScript and SASS files.

```
npm run build
```

## Todo

- notice that display name is required
- connected members bar
- timestamps on messages
