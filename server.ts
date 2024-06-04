import * as express from "express";
import * as expressStaticGzip from "express-static-gzip";
import * as path from "path";
import * as dotenv from "dotenv";
import { Env } from "./src/common/types/global";
import * as https from "https";
import * as fs from "fs";

const app = express();
dotenv.config();
const { NODE_ENV, PORT, DOMAIN } = process.env;

app.use(expressStaticGzip(path.join(__dirname, "./dist"), {}));

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

if (NODE_ENV === Env.Production || NODE_ENV === Env.Development) {
  const port = PORT || 443;

  const options = {
    key: fs.readFileSync(`/etc/letsencrypt/live/${DOMAIN}/privkey.pem`),
    cert: fs.readFileSync(`/etc/letsencrypt/live/${DOMAIN}/cert.pem`),
    ca: fs.readFileSync(`/etc/letsencrypt/live/${DOMAIN}/chain.pem`),
  };

  const server = https.createServer(options, app);
  // eslint-disable-next-line no-console
  server.listen(port, () => console.log("HTTPS server is listening..."));
} else {
  const port = PORT || 3002;
  // eslint-disable-next-line no-console
  app.listen(port, () => console.log(`Listening on port ${port}`));
}
