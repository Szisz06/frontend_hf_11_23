export default class SorView {
  #obj = {};
  constructor(index, obj, szuloElem) {
    this.#obj = obj;
    this.index = index;
    this.szuloElem = szuloElem;
    this.htmlOsszerak();
    this.torlesElem = this.szuloElem.find(".torles:last");
    this.torlesElem.on("click", () => {
      this.trigger("sortorles");
    });
  }
  trigger(e) {
    const esemenyem = new CustomEvent(e, { detail: this.#obj.auto_id });
    window.dispatchEvent(esemenyem);
  }
  htmlOsszerak() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      txt += `<td>${this.#obj[key]}</td>`;
    }
    txt += `<td><button class="torles"> Delete </button></td>`;
    txt += "</tr>";
    this.szuloElem.append(txt);
  }
}
