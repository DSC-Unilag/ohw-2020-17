/* eslint-disable no-restricted-globals */
self.postMessage({ message: "worker connected" });
setInterval(async () => {
  try {
    //ping the server
    const response = await fetch("http://localhost:5000/api/v1/users/", {
      credentials: "include",
    });
    if (!response.ok) {
      self.postMessage({ sessionExpired: true });
    }
  } catch (e) {
    self.postMessage({ sessionExpired: true });
  }
  // self.postMessage({ message: "worker connected" });
}, 1000 * 60);
