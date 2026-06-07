# Class 17 Reflection Questions
#  Async Fetch Movie Finder (Set C3)

A complete movie search engine featuring text debouncing, loading templates, and favorite list management.

###  My Learning Reflections
* **My Understanding:** Async/await simplifies complex fetch requests, making background operations read like straightforward, top-to-bottom code blocks. This keeps the application easy to map and scale.
* **My Struggles:** Forgetting to wrap my fetch requests in a secure `try/catch` block meant that if a user lost internet access, the app would crash instantly instead of showing a helpful error alert.
* **My Growth:** I successfully built a 500ms input debounce controller. This simple check protects rate-limited endpoints from overloading while users are actively typing characters.
