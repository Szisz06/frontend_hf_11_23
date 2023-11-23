import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("autos", this.megjelenit.bind(this));
    window.addEventListener("sortorles", (e) => {
      this.dataService.deleteData("autos", e.detail, this.ujratolt);
    });
    window.addEventListener("postSubmit", (e) => {
      this.dataService.postData(e.detail);
    });
  }

  ujratolt() {
    location.reload();
  }

  megjelenit(list) {
    new TablaView(list, $(".adatok"));
    new UrlapView();
  }
}
