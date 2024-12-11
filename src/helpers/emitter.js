import event from "events";

const eventEmitter = new event.EventEmitter();

export const emit = (emitName, ...rest) => eventEmitter.emit(emitName, rest);

export const eventListener = (emitName, callBack) =>
  eventEmitter.on(emitName, callBack());
