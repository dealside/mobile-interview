# mobile-interview

This is a pnpm workspace with two projects: an expo frontend and a hono backend. Set up a websocket connection between the both of them. The mobile app should have one screen that listens to the websocket server. the server needs to have a websocket endpoint and a http endpoint. the http endpoint should be able to receive a string. Whenever the server receives a fresh string it should emit it on the websocket connection. The mobile app should receive the emitted value and display it on screen.
