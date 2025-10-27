const EventEmitter = require("events");

const customEmitter = new EventEmitter(); //Created object from EventEmitter class



customEmitter.on("response", (name, list) => {
    console.log("event received", name, list);
})


customEmitter.emit("response", "melih", [124,512,412,0]);
