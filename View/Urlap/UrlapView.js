import { adatLeiro } from "../adatLeiro.js";

export default class UrlapView {
  constructor() {
    this.szuloElem = document.querySelector(".urlap");
    this.formElem = null;
    this.htmlOsszerak();
  }

  htmlOsszerak() {
    this.formElem = document.createElement("form");
    this.formElem.classList.add("urlap");

    for (const key in adatLeiro) {
      if (adatLeiro.hasOwnProperty(key)) {
        if (key != "auto_id") {
          const label = document.createElement("label");
          label.setAttribute("for", key);
          label.classList.add("form-label");
          label.textContent = adatLeiro[key];

          const input = document.createElement("input");
          input.setAttribute("type", "text");
          input.classList.add("form-control");
          input.setAttribute("id", key);
          input.setAttribute("placeholder", `Write in :  ${key}`);
          input.setAttribute("name", key);

          const div = document.createElement("div");
          div.classList.add("mb-3", "mt-3");
          div.appendChild(label);
          div.appendChild(input);

          this.formElem.appendChild(div);
        }
      }
    }
    this.submitButton = document.createElement("button");
    this.submitButton.classList.add("btn", "btn-success", "kuld");
    this.submitButton.textContent = "Submit";
    this.submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      this.formData = {};
      for (const key in adatLeiro) {
        if (key != "auto_id") {
          this.formData[key] = document.getElementById(key).value;
        }
      }
      console.log(this.formData);
      window.dispatchEvent(
        new CustomEvent("postSubmit", { detail: this.formData })
      );
    });

    this.formElem.appendChild(this.submitButton);

    this.szuloElem.appendChild(this.formElem);
  }
}
