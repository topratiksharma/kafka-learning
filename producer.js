const { kafka } = require("./client.js");

async function init() {
  const producer = kafka.producer();

  console.log("Producer connection initiated...");
  await producer.connect();

  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: 0,
        key: "location.update",
        value: JSON.stringify({
          name: "Tony Stark",
          location: "SOUTH OF DAKOTA",
        }),
      },
    ],
  });

  await producer.disconnect();
}

init();
