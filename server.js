/**
 * Server Logic
 */

const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require("next-i18next/middleware");
const nextI18next = require("./i18n");
const { parse } = require("url");
const mobxReact = require("mobx-react");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

app
  .prepare()
  .then(() => {
    const server = express();
    server.set("port", parseInt(process.env.PORT, 10) || 8081);
    server.use(nextI18NextMiddleware(nextI18next));

    // Dev environment whitelist. Add your local env to avoid https redir
    const localDev = ["localhost:8081", "whohw.us-east-2.elasticbeanstalk.com"];

    // Force HTTPS if we're on live. Whitelist dev envs above to avoid redirection.
    // Note: Technically doing string comparison here, which has some potential security concerns, but don't have many options because of how AWS load balancer works
    function forceSSL(req, res, next) {
      if (
        req.headers["x-forwarded-proto"] === "https" ||
        localDev.includes(req.headers.host)
      ) {
        return next();
      }
      res.redirect("https://" + req.headers.host);
    }

    server.all("*", forceSSL);

    /**
     * Routes
     */

    // Home
    // server.get('/', (req, res, next) => {
    //   const actualPage = '/index' // Target page to reference in /pages
    //   const queryParams = {}
    //   // Attach params to response
    //   app.render(req, res, actualPage, queryParams) // Render client
    // })

    // Handle all other requests as local /pages (home, about, etc)
    server.get("*", (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    /**
     * Init
     */
    server.listen(server.get("port"), err => {
      if (err) throw err;
      console.log("Server listening on port " + server.get("port"));
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
