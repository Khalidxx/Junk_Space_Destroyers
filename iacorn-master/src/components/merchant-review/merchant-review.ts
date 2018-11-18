import { Component } from "@angular/core";
import { MerchantStore } from "../../stores";

@Component({
  selector: "merchant-review",
  templateUrl: "merchant-review.html"
})
export class MerchantReviewComponent {
  constructor(public store: MerchantStore) {}

  // doInfinite(infiniteScroll) {
  //   console.log("Begin async operation");
  //   setTimeout(() => {
  //     let consumerComments: ConsumerComment[] = this.consumerCommentProvider.query();
  //     console.log(consumerComments);
  //     for (let i = 0; i < consumerComments.length; i++) {
  //       this.consumerComments.push(consumerComments[i]);
  //     }
  //     for (let i = 0; i < 10; i++) {
  //       this.item.push(this.item.length);
  //     }
  //     console.log("Async operation has ended");
  //     infiniteScroll.complete();
  //   }, 500);
  // }
}
