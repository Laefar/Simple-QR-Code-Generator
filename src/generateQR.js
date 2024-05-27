var qrcode = new QRCode(document.getElementById("qrcode"));

qrcode.width = 128;
qrcode.height = 128;

currentTab = chrome.tabs.query({active: true, lastFocusedWindow: true}, url=>{qrcode.makeCode(url[0].url);});