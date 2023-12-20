import "./tronweb";

const TronWeb = require("tronweb");

let appTron = new TronWeb({
  fullHost: "https://nile.trongrid.io",
  headers: { "TRON-PRO-API-KEY": "94c1c2bc-6f17-433d-844f-69fbd25c475d" },
  // privateKey: "",
  // privateKey: "882efc4feb24ead6da9167c6740e27a1fc6c0b95074e6b6e47e8b1e831043ac6",
});

class InpageBridge {
  constructor() {
    this._pending = {};
    this._pendingInstant = {};
  }
  sendAsync(payload, callback) {
    console.log({ payload, callback });
    let rd = Math.random() * 1000;
    let stringMessage = payload + "&rd=" + rd;
    this._pending[rd] = callback;
    setTimeout(() => {
      this.onResult(rd, null, {
        addresS: "$%$%$%",
      });
    }, 2000);
  }
  onResult(id, err, res) {
    const callback = this._pending[id];
    if (callback) {
      // console.log(callback);
      callback(err, res);
      delete this._pending[id];
    }
  }
}

const inpage = new InpageBridge();

const stringArgs = (prop, args) => {
  let string = "prop:" + prop + "&args:";
  string = string + JSON.stringify(args);
  return string;
};

const proxyTrx = {
  get: (target, prop, args) => {
    return Reflect.get(target, prop, args);
    console.log(prop);
    return (...e) => {
      return new Promise((resolve, reject) => {
        try {
          inpage.sendAsync(stringArgs(prop, [...e]), (error, response) => {
            error = error || response.error;
            error ? reject(error) : resolve(response);
          });
        } catch (error) {
          // Per EIP-1193, send should never throw, only reject its Promise. Here
          // we swallow thrown errors, which is safe since we handle them above.
        }
      });
    };
  },
};

window.saveWallet = appTron;
window.saveWallet.defaultAddress = {
  base58: "TKWvF8ckZruyM64ioZ7An5kRoWUiNCn7js",
  hex: "4168b8745992d29b80cb0ffbb022cbf99004a319b7",
};
window.saveWallet.trx = new Proxy(appTron.trx, proxyTrx);

const testAsync = async () => {
  // let testTrx = await window.saveWallet.trx.getAccount(
  //   "TAm3kTkERoXYGTjfdGpPGDYGLqBomQqkAt"
  // );
  // console.log({ testTrx });
  let stringMess = window.saveWallet.toHex("keckeckec");
  console.log(stringMess);
  // let testTrx2 = await window.saveWallet.trx.signMessageV2();
  // console.log({ testTrx2 });
  // console.log({ xyz: saveWallet.xyz });
  // const mess = await saveWallet.ex("REWRWERw", 353453, 435345);
  // const mess2 = await saveWallet.ec("REWRWERw", 353453, 435345);
  // const mess2 = await saveWallet.address("REWRWERw", 353453, 435345);
  // console.log({ mess2 });
};
testAsync();

// setTimeout(() => {
//   inpage.onResult();
// }, 2000);
