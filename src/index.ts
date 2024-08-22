import { PubSubManager } from "./PubsubManger";

setInterval(() => {
  PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPLE");
}, 5000);
