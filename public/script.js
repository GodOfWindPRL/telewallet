// @ts-ignore
import EventEmitter from "eventemitter3";
// @ts-ignore
import Contract from "contract";

let copyProps = (target, source) => {
  // this function copies all properties and symbols, filtering out some special ones
  try {
    Object.getOwnPropertyNames(source)
      .concat(Object.getOwnPropertySymbols(source))
      .forEach((prop) => {
        // console.log("prop", prop);
        if (
          !prop.match(
            /^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/
          )
        ) {
          // console.log(prop);
          Object.defineProperty(
            target,
            prop,
            Object.getOwnPropertyDescriptor(source, prop)
          );
        }
      });
  } catch (error) {
    throw new Error("TronWeb not found");
  }
};

class SaveWallet extends EventEmitter {
  constructor(provider) {
    super();
    //Set default
    this = new Proxy(
      this.extenalProvider,
      this.proxySaveWallet
    );
    this.extenalProvider = provider;
    copyProps(this, provider);
  }

  proxySaveWallet = {
    get: (target, prop, args) => {
     return window.ReactNativeWebView.postMessage(prop)
    //   return Reflect.get(target, prop, args);
    },
  };

  contract = (abi = [], address = false) => {
    return new Contract(this.extenalProvider, abi, address, this);
  };
  kec = () => {
    alert("kec")
  }
}

window.tronWeb = new SaveWallet(window.tronWeb);

window.tronWeb.kec();
