import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TranslateModule } from "@ngx-translate/core";
import { MomentPipe } from "../../pipes/moment/moment";
import {
  MerchantMenuComponent,
  MerchantInfoComponent,
  MerchantReviewComponent,
  StarRatingComponent
} from "../../components";

import { MerchantPage } from "./merchant";

@NgModule({
  declarations: [
    MerchantPage,
    MomentPipe,
    MerchantMenuComponent,
    MerchantInfoComponent,
    MerchantReviewComponent,
    StarRatingComponent
  ],
  imports: [IonicPageModule.forChild(MerchantPage), TranslateModule.forChild()]
})
export class MerchantPageModule {}
