# Class 16 The Event Loop & Promises
The Event Loop Engine Core Mechanics
JavaScript runs single-threaded, meaning it can only execute one line of code at a time. To handle heavy operations (like network data fetches) without freezing the user interface, it offloads those tasks to the browser's background environment.

When a background task finishes, its completion callback is placed into a waiting line. The Event Loop constantly monitors this line. The moment the main execution stack is empty, the loop safely pulls the waiting callback forward and executes it.

Microtasks vs. Macrotasks Priorities
The browser environment manages asynchronous background operations using two distinct priority lines:

Microtask Queue (High Priority): Handles immediate engine tasks like Promise resolutions (.then() hooks) and MutationObserver events.

Macrotask Queue (Low Priority): Handles standard browser background events like setTimeout, timers, and user interface rendering loops.

Priority Execution Rules:
The Event Loop always clears out the high-priority Microtask queue before it allows lower-priority Macrotasks to run. This is why a resolved Promise will always execute its callback before a setTimeout timer, even if the timer is set to zero milliseconds.
