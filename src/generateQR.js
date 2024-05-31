// Create and setup QRCode Object.
var qrcode = new QRCode(document.getElementById("qrcode"));

qrcode.width = 128;
qrcode.height = 128;

// Get current Active Tabs Promise.
let currentTab = chrome.tabs.query({active: true, lastFocusedWindow: true});

// Set the default value of the input field as the active tab url.
let linkArea = document.getElementById("linkArea");
currentTab.then(tab=>{linkArea.defaultValue = tab[0].url;});

// Hook the generate QR code function to the button's on click event.
let generateBtn = document.getElementById("generateBtn");
generateBtn.onclick = function() {
    qrcode.makeCode(linkArea.value);
};

// Generate the QR Code for the active tab.
currentTab.then(tab=>{qrcode.makeCode(tab[0].url);});