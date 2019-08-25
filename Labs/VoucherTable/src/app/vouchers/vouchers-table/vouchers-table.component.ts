import { Component, OnInit } from "@angular/core";
import { VoucherService } from "../voucher.service";
import { Voucher } from "src/app/shared/model";

@Component({
  selector: "app-vouchers-table",
  templateUrl: "./vouchers-table.component.html",
  styleUrls: ["./vouchers-table.component.scss"]
})
export class VouchersTableComponent implements OnInit {
  vouchers: Voucher[];

  constructor(private vs: VoucherService) {}

  ngOnInit() {
    this.vs.getVouchers().subscribe((data: Voucher[]) => {
      this.vouchers = data;
    });
  }
}
