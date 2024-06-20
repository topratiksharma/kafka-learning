/* `admin` in this code is creating a connection to the Kafka admin client and
  then using it to create a new topic named "rider-updates" with 2 partitions.
  The admin client is responsible for managing administrative operations on the
  Kafka cluster, such as creating topics, configuring topics, and managing
  consumer groups. */

const { kafka } = require("./client");

/**
 * The `init` function establishes a connection to a Kafka admin client, creates a topic named
 * "rider-updates" with 2 partitions, and then disconnects from the admin client.
 */
async function init() {
  const admin = kafka.admin();

  console.log("Admin connection initiated...");
  await admin.connect();
  console.log("Admin connection success...");

  console.log("Creating Topic rider-updates...");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });

  console.log("Topic rider-updates created...");

  await admin.disconnect();
  console.log("Admin connection terminated...");
}

init();
