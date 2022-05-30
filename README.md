Basic mailer
Git bash terminal run:
  NODE_TLS_REJECT_UNAUTHORIZED='0' nodemon index.js

Load nodemon:
  npm i nodemon -g

HTML call:
   fetch(
      'http://localhost:4000',
      {
        method: "GET",
        headers: { "content-type": "application/json" },
      }
    )
