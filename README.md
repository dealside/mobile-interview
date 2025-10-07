# mobile-interview

This is a pnpm workspace with two projects: an expo frontend and a hono backend.

## Tier 1
Set up a websocket connection between the both of them. The mobile app should have one screen that listens to the websocket server. The server needs to have a websocket endpoint and a http endpoint. the http endpoint should be able to receive a string. Whenever the server receives a fresh string it should emit it on the websocket connection. The mobile app should receive the emitted value and display it on screen.

## Tier 2
Create a separate component library under 'libs/components'. Have the library hold a custom text component. Use this component to display the text we get on the websocket in our mobile app.

## Tier 3
Integrate with openai. When the http endpoint receives the string we first let an llm generate a short text based on the input string. Once the llm is done generating it should then emit the final output on our websocket.

## Tier 4
Containerise the backend application. Include a redis container. Store every string + llm output on redis.
