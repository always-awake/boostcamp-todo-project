class Observer {

  constructor() {
    this.eventList = {};
  }

  addSubscriber(subscriber) {
    const { event, handler, target } = subscriber;
    if (!Object.keys(this.eventList).includes(event))
      this.eventList[event] = [];
    this.eventList[event].push({
        handler: handler,
        target: target
    });
  }

  deleteSubscriber(subscriber) {
    const { event, handler, target } = subscriber;
    this.eventList = this.eventList[event].forEach((oldSubscriber, index) => {
      if (oldSubscriber.handler === handler && oldSubscriber.target === target)
        this.eventList[event].splice(index, 1)
    });
  }

  notifySubscriber(event, data) {
    this.eventList[event].forEach((oldSubscriber) => {
      oldSubscriber.handler(data);
    });
  }
}

module.exports = {
  Observer,
};