const cron = require("node-cron");
const axios = require("axios");

const events = [
  { text: "event 1", dateTime: "* * * * *" },
  { text: "event 2", dateTime: "* * * * *" },
  { text: "event 3", dateTime: "* * * * *" },
  { text: "event 4", dateTime: "* * * * *" },
  { text: "event 5", dateTime: "* * * * *" },
  { text: "event 6", dateTime: "* * * * *" },
  { text: "event 7", dateTime: "* * * * *" },
  { text: "event 8", dateTime: "* * * * *" },
  { text: "event 9", dateTime: "* * * * *" },
  { text: "event 10", dateTime: "* * * * *" }
];

const triggerFunction = async text => {
  console.log(`Event triggered: ${text}`);
  await sleep(text.length * 1000);
  console.log(`Event completed: ${text.split("").reverse().join("")}`);
};

const sleep = duration => {
  return new Promise(resolve => setTimeout(resolve, duration));
};

events.forEach(event => {
  cron.schedule(event.dateTime, () => {
    triggerFunction(event.text);
  });
});