import { Worker } from "bullmq";
import { connection } from "./producer.js";

const worker = new Worker(
  "email-queue",
  async (job) => {
    console.log(`Message req id : ${job.id}`);
    console.log("Processing message");
    console.log(`Sending email: ${job.data.email}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Email sent successfully");
        resolve();
      }, 5000);
    });
  },
  { connection },
);
