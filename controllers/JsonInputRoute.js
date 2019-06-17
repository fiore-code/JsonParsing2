const express = require('express');
const fs = require('fs');

function JsonRequest(req, res, next) {
    console.log(req.body);      // your JSON
    res.send(req.body);
    fs.appendFile("temp.txt", req.body.MachineId, (err) => {
        if (err) console.log(err);
        console.log("Json Machine Id Inputted to file");
    })
    for (var contentValue of req.body.content) {
        fs.appendFile("temp.txt", contentValue, (err) => {
            if (err) console.log(err);
            console.log("Json Content Inputted to file");
        });
    }// echo the result back
};

module.exports = JsonRequest;