import DataService from "../Model/DataService.js";
import DivMegjelenit from "../View/DivMegjelenit/DivMegjelenit.js";


export default class UserController {
  constructor() {
    this.dataService = new DataService();
    this.dataService.getData("autos", this.megjelenit.bind(this));
  }

  megjelenit(list) {
    new DivMegjelenit(list, $(".divMegjelenit"));
  }
}
