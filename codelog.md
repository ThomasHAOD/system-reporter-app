# System Reporter Codelog

## Setup Tribulations

In trying to set up React with webpack/babel for the first time I struggled to get hot reloading working in the browser. No matter how many tutorials I looked over, I could not work out why it wouldn't hot reload. It's likely I had different things wrong at different times, which is potentially a lesson in why you should read the documentation carefully/try combinations of things one by one? Who knows, I'm just happy it's working now so I'll commit this initial set up and begin the day by day account below.

## Day 1

Managed to set up a simple server with hello world getting from the front end to the back end and logged. Getting it returned is a nightmare...I have a feeling I'm getting into the world of buffers and streams of which I only have the highest of high level knowledge, my head hurts...job for tomorrow.

## Day 2

A fresh brain makes for good progress it would seem. Something weird is happening on creating a string when initially receiving data on the server, so sending it as a response is not parsable if sent straight back to the client. If I send back a stringified JSON object created on the back end that works fine. Puzzler, but at least I'm getting a hello world message on the front end too now.
