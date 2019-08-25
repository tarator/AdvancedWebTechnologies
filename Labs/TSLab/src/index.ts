import { TableHelper } from "./TableHelper";
import * as $ from "jquery";

$(document).ready(() => {
  var div: HTMLElement = document.querySelector("#table");
  var th = new TableHelper();
  th.addHTML(div);
});
