# System Reporter Codelog

## Part 1: Hello World (`main` branch)

### Setup Tribulations

In trying to set up React with webpack/babel for the first time I struggled to get hot reloading working in the browser. No matter how many tutorials I looked over, I could not work out why it wouldn't hot reload. It's likely I had different things wrong at different times, which is potentially a lesson in why you should read the documentation carefully/try combinations of things one by one? Who knows, I'm just happy it's working now so I'll commit this initial set up and begin the day by day account below.

### Day 1

Managed to set up a simple server with hello world getting from the front end to the back end and logged. Getting it returned is a nightmare...I have a feeling I'm getting into the world of buffers and streams of which I only have the highest of high level knowledge, my head hurts...job for tomorrow.

### Day 2

A fresh brain makes for good progress it would seem. Something weird is happening on creating a string when initially receiving data on the server, so sending it as a response is not parsable if sent straight back to the client. If I send back a stringified JSON object created on the back end that works fine. Puzzler, but at least I'm getting a hello world message on the front end too now.

So...that problem is solved. Turned out adding chunks together is not a good idea if there is likely to be only one chunk. At least that seemed to solve the issue. The next question is why do the [node docs](https://nodejs.dev/learn/get-http-request-body-data-using-nodejs) suggest basically this exact setup if it isn't going to work? Obviously I'm still missing a piece of the puzzle. Anyway, async/await doesn't work on the front end so that's the next thing I'll tackle, probably a webpack issue.

I needed to add the @babel/polyfill setting/plugin to the project, and now ES7 syntax works a treat.

---

## Part 2: Websockets and Data Streams (`setup-websocket` branch)

### Day 2 (cont.)

Web Sockets are too complex for me to set up without using a framework for the time being so shelving that approach for now.

## Part 3: Websockets and Data Streams (`setup-autoupdate` branch)

### Day 3 (cont.)

Updated the front and backend to represent a timer ticking up (one update per second), from 1 to 60. Next step is to introduce the ram usage component.

Brought in the string generating functionality from the [system-reporter-cli](https://github.com/ThomasHAOD/system-reporter-cli) and adjusted it so the system uptime and RAM usage do indeed update. So now the app outputs updating strings. Now to make it look good.
