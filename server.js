'use strict';

const axis = require("axios")

/*var http = require('http');
var port = process.env.PORT || 1337;*/

var serverPOSTURL = "www.myserverhere.net" // Stand in since I wasn't given a server.

class menuItem {

    name = ""
    price = 30

}

const express = require('express')
const app = express()

currentMenu = new Array()

function updateMenu() {

}

function getMenu() {
    app.get("/menu")
        .then(function (response) {
            currentMenu = response
            currentMenu.unshift( new menuItem() )
        })

    updateMenu()
}

function getOrders() {
    app.get("/orders")
        .then(function (response) {
            currentOrders = response
        })

    updateOrders()
}




app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/todos', (req, res) => {
    console.log(req.body.todo)
})


/*http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
*/

