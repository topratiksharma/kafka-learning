const { Kafka } = require("kafkajs");
/* This code snippet is creating a new instance of the Kafka class from the kafkajs library and
exporting it as a module. The Kafka instance is configured with a specific clientId ("my-app") and a
list of broker addresses (in this case, only one broker at "192.168.0.38:9092"). This configuration
sets up a connection to a Kafka cluster with the specified broker(s) and client ID. */

exports.kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.0.38:9092"],
});
