const express = require('express');
const fs = require('fs');
var os = require("os");

function JsonRequest(req, res, next) {
    console.log(req.body);      // your JSON
    res.send(req.body);
    fs.appendFile("temp.txt",JSON.stringify(req.body), (err) => {
        if (err) console.log(err);
        console.log("Json Inputted to file");
    });
    // for (var contentValue in req.body.content) {
    //     fs.appendFile("temp.txt", contentValue, (err) => {
    //         if (err) console.log(err);
    //         console.log("Json Content Inputted to file");
    //     });
    // }// echo the result back
    fs.appendFile("temp.txt",os.EOL, (err) => {
        if (err) console.log(err);
        console.log("Json new line Inputted to file");
    });
}

module.exports = JsonRequest;