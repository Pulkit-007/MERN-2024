const express = require("express");
const app=express();

const port = 3000;
function lwhome(request,response)
{
    console.log("Somebody touch this page about");
    response.sendFile(__dirname+"/home.html");
}

function lwabout(request,response)
{
    console.log("Somebody touch this page about");
    response.send("<h2>About</h2>");
}
function lwroot(request,response)
{
    console.log("Somebody touch this page root");
    response.send("<h2>My home root page </h2>");

}
function lwdata(request,response)
{
    let myx = request.query.x;
    let myy = request.query.y;
    console.log(myx);
    response.send("<h2>"+"Hi "+myx+"Country : "+myy+"</h2>");
    response.send("<h2><u>My data page</u> </h2>");

}
app.get("/",lwroot)
app.get("/home",lwhome)
app.get("/about",lwabout)
app.get("/data",lwdata);

function startServer()
{
    console.log("JS app at server started successfully!!!!!!");
}
app.listen(port,startServer);