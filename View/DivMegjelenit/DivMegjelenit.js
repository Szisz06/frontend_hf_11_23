import DivOsszerak from "./DivOsszerak.js";
export default class DivMegjelenit {
  #list = [];

  constructor(list, szulElem) {
    this.#list = list;
    this.szulElem = szulElem;
    this.sorMegjelenit();
  }

  sorMegjelenit() {
    this.#list.forEach((obj, index) => {
      new DivOsszerak(index, obj, this.szulElem);
    });
  }
}
