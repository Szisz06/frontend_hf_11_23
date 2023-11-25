import { adatLeiro } from "../adatLeiro.js";
export default class DivOsszerak {
  #obj = {};

  constructor(index, obj, szulElem) {
    this.#obj = obj;
    this.index = index;
    this.szulElem = szulElem;
    this.htmlOsszerak();
  }

  htmlOsszerak() {
    let div = document.createElement("div");
    for (const key in this.#obj) {
      if (key !== "auto_id" && key !== "created_at" && key !== "updated_at") {
        let p = document.createElement("p");
        p.textContent =
          key === "price" ? `${this.#obj[key]} $` : this.#obj[key];
        div.appendChild(p);
      }
    }
    this.szulElem.append(div);
  }
}
