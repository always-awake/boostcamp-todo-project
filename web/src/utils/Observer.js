class Observer {

  constructor() {
    this.subscribers = {};
  }

  addSubscriber(subscriber) {
    const { eventName, handler, target } = subscriber;
    this.subscribers[eventName] = {
      handler: handler,
      target: target
    };
  }

  deleteSubscriber(subscriber) {
    const { eventName } = subscriber;
    delete this.subscribers[eventName];
  }

  notifySubscriber(eventName, responseData) {
    this.subscribers[eventName].handler(responseData);
  }
}

module.exports = {
  Observer,
};