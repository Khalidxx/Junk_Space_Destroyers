import { NgModule } from "@angular/core";
import { MerchantMenuComponent } from "./merchant-menu/merchant-menu";
import { MerchantReviewComponent } from "./merchant-review/merchant-review";
import { MerchantInfoComponent } from "./merchant-info/merchant-info";
import { DatePipe } from "../pipes";
import { StarRatingComponent } from "./star-rating/star-rating";

@NgModule({
  declarations: [
    MerchantMenuComponent,
    MerchantReviewComponent,
    MerchantInfoComponent,
    DatePipe,
    StarRatingComponent
  ],
  imports: [],
  exports: [
    MerchantMenuComponent,
    MerchantReviewComponent,
    MerchantInfoComponent,
    StarRatingComponent
  ]
})
export class ComponentsModule {}
