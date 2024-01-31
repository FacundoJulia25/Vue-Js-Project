const events = new Map();

// This is an object that exports three functions: $on, $off, and $emit
export default {
  // Function to subscribe to an event
  $on(eventName, fn) {
    // Check if the event name is not present in the events map
    if (!events.has(eventName)) {
      // If not, create an entry with an empty array for the event name
      events.set(eventName, []);
    }
    // If the event name already exists, add the provided function to the array of callbacks
    events.get(eventName).push(fn);
  },

  // Function to unsubscribe from an event
  $off(eventName, fn) {
    // Not implemented, throws an exception with a message indicating it's not implemented
    throw { message: "Not implemented" };
  },

  // Function to emit/publish an event with optional data
  $emit(eventName, data) {
    // Check if the event name is present in the events map
    if (events.has(eventName)) {
      // If yes, iterate through the array of callbacks and invoke each one with the provided data
      events.get(eventName).forEach((fn) => fn(data));
    }
  },
};
