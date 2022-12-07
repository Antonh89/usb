const usb = require("usb");

(async () => {
  const customWebUSB = new usb.WebUSB({
    allowAllDevices: true,
  });

  for (const device of await customWebUSB.getDevices()) {
    console.log(device);
  }
})();
