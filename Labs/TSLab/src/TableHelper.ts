import * as $ from "jquery";
import { Voucher } from "./model";

export class TableHelper {
  addHTML(div: HTMLElement) {
    $.getJSON("vouchers.json").then((data: Voucher[]) => {
      var tbody = "";
      data.forEach((v: Voucher) => {
        tbody += `<tr >
                    <td>${v.Text}</td>
                    <td>${v.Amount}</td>
                    <td>${v.Date}</td>
                    </tr>`;
      });
      div.innerHTML = `<table><tr><th>Text</th></tr>${tbody}</table>`;
      console.log(data);
    });

    fetch("vouchers.json")
      .then((resp: any) => {
        return resp.json();
      })
      .then(data => {
        console.log("vouchers: ", data);
      });
  }
}
