import { server } from "./server.js";

const port = 8002;
server.listen(port, () => {
  console.log(`Server running at localhost:${port}/`);
});
