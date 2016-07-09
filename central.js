//(C) 2016 RYAN RICHARD SELDEN
/*
Made by Team 1540 - The Flaming Chickens <www.team1540.org>
*/

const noble = require('noble')

noble.on('discover', function(device) {
	console.log("[CONN]: " + device.address)
})

if (process.platform === "win32") {
  var rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on("SIGINT", function () {
    process.emit("SIGINT");
  });
}

noble.on('stateChange', function(state) {
  if (state === 'poweredOn')
    noble.startScanning();
  else
    noble.stopScanning();
});

process.on("SIGINT", function () {
  console.log("Please wait for BLE breakdown...")

  noble.stopScanning(function () {
  	console.log("Stopped Scanning!")
  	process.exit()
  })

})