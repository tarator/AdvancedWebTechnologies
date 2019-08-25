import { Injectable } from "@angular/core";
import { Voucher } from "../shared/model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VoucherService {
  constructor(private httpClient: HttpClient) {}

  getVouchers(): Observable<Voucher[]> {
    var url = "/assets/vouchers.json";
    return this.httpClient.get<Voucher[]>(url);
  }
}
