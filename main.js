import AdminController from "./Controller/AdminController.js";
import UserController from "./Controller/UserController.js";

$(document).ready(function () {
  if ($("body").hasClass("admin")) {
    new AdminController();
  } else {
    new UserController();
  }
});
