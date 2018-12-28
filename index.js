require("@babel/polyfill");
const CommNodeHid = require("@ledgerhq/hw-transport-node-hid").default;

console.log(`>> listening for devices...`);

CommNodeHid.listen({
  next: e => {
    const { device } = e;
    console.log(
      `>> found ${device.manufacturer} ${device.product} (path: ${device.path})`
    );
  }
});
