const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });

  await consumer.connect();

  await consumer.subscribe({
    topics: ["rider-updates"],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      console.log(
        `TOPIC: [${topic}] :PART:${partition}`,
        JSON.stringify(message.value.toString())
      );
    },
  });

  //   await consumer.disconnect();
}
init();
