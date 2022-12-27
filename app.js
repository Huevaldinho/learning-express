//Import express module
const express = require("express");
//starts express instance
const app = express();

/*
Routing methods
Express supports the following routing methods corresponding to the HTTP methods of the same names:
    checkout
    copy
    delete
    get
    head
    lock
    merge
    mkactivity
    mkcol
    move
    m-search
    notify
    options
    patch
    post
    purge
    put
    report
    search
    subscribe
    trace
    unlock
    unsubscribe
*/

/*

instanciaExpress.metodo('ruta',funcion(parametros){
  Codigo...

  Para que se ejecute el codigo
  el request del cliente tiene que tener esta ruta
  y el metodo http espeficico (get por ejemplo).
})

*/
app.get("/", (req, res) => {
  res.send("GET request to the / route.");
});
// GET method route with params
//name is optional
app.get("/:id/:name?", (req, res) => {
  console.log(req.params);
  const parametros = { id: req.params.id, name: req.params.name };
  res.send(parametros);
});
// POST method route
app.post("/", (req, res) => {
  res.send("POST request to the / route");
});

// DELETE method route
app.delete("/", (req, res) => {
  res.send("DELETE request to the / route");
});
// PUT method route
app.put("/", (req, res) => {
  res.send("PUT request to the / route");
});

app.all("/secret", (req, res, next) => {
  res.send(
    "Response to all types of request. Current request type: " + req.method
  );
});

if (!module.main) {
  app.listen(3000);
  console.log("Express started on port 3000");
}
//npm run server
