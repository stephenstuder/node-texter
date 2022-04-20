import Vonage from "@vonage/server-sdk";
import "dotenv/config";

const vonage = new Vonage({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET
});

const from = "18664461518";
const to = "14802508235";
const text = "Makenna is SMOKING HOT";

vonage.message.sendSms(from, to, text, (err, responseData) => {
    if (err) {
        console.log(err);
    } else {
        if (responseData.messages[0]["status"] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]["error-text"]}`);
        }
    }
});
