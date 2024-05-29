const express=require("express");

const app=express();

function lw()
{
    console.log("HI");
}
app.get("/",lw);
app.listen(4000);