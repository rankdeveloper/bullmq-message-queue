import { Queue } from "bullmq";
import IORedis from "ioredis";

export const connection = new IORedis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});

const emailQueue = new Queue("email-queue", {
  connection,
});

async function init() {
  const res = await emailQueue.add("send-email", {
    email: "bLc4o@example.com",
    subject: "test",
    body: "Hey Rankush welcome to bullmq",
  });

  console.log("Job added to the queue:", res.id);
}
init();
