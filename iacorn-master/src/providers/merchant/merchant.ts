import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MerchantProvider {
  constructor(public http: HttpClient) {
    console.log("Hello MerchantProvider Provider");
  }
}
