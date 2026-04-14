# AIChatBotUI

An Angular-based frontend for the **AIChatBot** backend.  
This project provides a simple chat interface where users can send messages to the AI, view replies, and reset the current conversation.

## Overview

This repository contains the UI layer of the chatbot system. It is built with **Angular 19** and communicates with the backend API running at:

```text
https://localhost:7187/Ai
```

The app includes:

- a chat page as the main route
- message input and chat history display
- loading/typing indicator while waiting for AI responses
- reset chat confirmation dialog
- HTTP integration with the backend API
- Angular SSR-related setup files generated in the project

## Features

- **Angular 19** application
- **Chat page** as the default route
- **Send message** to the backend AI service
- **Display user and AI messages** in the conversation
- **Typing/loading indicator** while waiting for a response
- **Reset chat** with confirmation dialog
- **Angular Material dialog/buttons** support
- **HTTP client integration** for API communication

## Tech Stack

- **Angular 19**
- **TypeScript**
- **Angular Material**
- **RxJS**
- **Angular SSR**
- **Express** (for SSR serving)

## Routing

The app routes users to the chat page by default:

- `/chat` → chat interface
- `/` → redirects to `/chat`

## How It Works

The chat flow is straightforward:

1. the user types a message in the chat UI
2. the frontend sends the message to the backend using `AIService`
3. while waiting, a typing indicator is shown
4. the backend returns a plain text AI response
5. the UI appends the response to the chat history
6. the chat window scrolls automatically to the latest message

When the user clicks reset chat, a confirmation dialog appears. If confirmed, the frontend calls the backend reset endpoint and clears the local message arrays.

## API Integration

The frontend communicates with the backend through `AIService`.

### Configured backend URL

```ts
https://localhost:7187/Ai
```

### Used endpoints

- `POST /Ai/Message`
- `POST /Ai/ResetChatMessages`

## Prerequisites

Before starting, make sure you have:

- **Node.js**
- **npm**
- **Angular CLI 19**
- the backend API running locally

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Charbel03/AIChatBotUI.git
cd AIChatBotUI/ChattUI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

or:

```bash
ng serve
```

### 4. Open the app

```text
http://localhost:4200
```

## Build

Create a production build with:

```bash
npm run build
```

## Run Tests

```bash
npm test
```

## Important Backend Configuration Note

The frontend currently points to:

```ts
https://localhost:7187/Ai
```

This value is defined in `src/app/app.config.ts`.

If your backend runs on a different URL or port, update that value before starting the app.

## Companion Repository

Backend API repository:

- `https://github.com/Charbel03/AIChatBot`
