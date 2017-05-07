/*
 * Include standard and third-party npm modules
 */
var net = require('net');
var Chance = require('chance');
const uuidV4 = require('uuid/v4');

var chance = new Chance();

var protocol = require('./core');

var instrument = process.argv[2];
var sound = protocol.instruments[instrument];

var uuid = uuidV4();

if (!sound) {
    console.log("No instrument found");
    return -1;
}


var dgram = require('dgram');
var server = dgram.createSocket("udp4");

var data = {
        "uuid":uuid,
        "instrument":instrument,
        "activeSince":new Date().toJSON()
    };
    
setInterval(function () {

    server.send(JSON.stringify(data);, 0, data.length, protocol.udpPort, protocol.multicast);
    console.log("Playing " + sound);




}, 1000);



