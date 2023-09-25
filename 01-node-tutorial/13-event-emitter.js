const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//listen to an event
customEmitter.on("response", (name, id) => {
    console.log(`data received user:     ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
    console.log(`some other logic here`);
});

// emit an event
customEmitter.emit('response','John',34)