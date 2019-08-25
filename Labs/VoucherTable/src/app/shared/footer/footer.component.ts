import { Component, OnInit } from "@angular/core";
import { VoucherService } from "src/app/vouchers/voucher.service";
import { Voucher } from "../model";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  constructor(private vs: VoucherService) {}

  vouchersum: number = 0;

  ngOnInit() {
    this.vs.getVouchers().subscribe((data: Voucher[]) => {
      data.forEach((v: Voucher) => {
        this.vouchersum += v.Amount;
      });
    });
  }
}
