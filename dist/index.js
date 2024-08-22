"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PubsubManger_1 = require("./PubsubManger");
setInterval(() => {
    PubsubManger_1.PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPLE");
}, 5000);
