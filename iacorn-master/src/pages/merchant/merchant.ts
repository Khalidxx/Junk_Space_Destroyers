import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Content,
  MenuController,
  ModalController
} from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

import { MerchantStore, CartStore } from "../../stores";

interface Tab {
  name: string;
  number: number;
}

@IonicPage()
@Component({
  selector: "page-merchant",
  templateUrl: "merchant.html"
})
export class MerchantPage {
  @ViewChild(Content) content: Content;

  tabs: Tab[] = [];
  tabNumber: number = 0;
  isMenuOpen: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translateService: TranslateService,
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public store: MerchantStore,
    public cartStore: CartStore
  ) {
    let tempTabs: string[] = [];

    let merchant = this.navParams.get("merchant");
    this.store.merchantInit(merchant);
    translateService
      .get(["MENU", "REVIEW", "MERCHANT_INFOMATION"])
      .subscribe(values => {
        tempTabs.push(values["MENU"]);
        tempTabs.push(values["REVIEW"]);
        tempTabs.push(values["MERCHANT_INFOMATION"]);
        let i: number;
        for (i = 0; i < tempTabs.length; i++) {
          this.tabs.push({
            name: tempTabs[i],
            number: i
          });
        }
      });
  }

  ionViewWillEnter() {}
  ionViewDidLoad() {}

  changeTabNumber(number: number) {
    this.tabNumber = number;
  }

  scrollTo(element: string) {
    let yOffset = document.getElementById(element).offsetTop;
    this.content.scrollTo(0, yOffset);
    this.menuCtrl.close();
  }

  presentCartModal() {
    let cartModal = this.modalCtrl.create("CartPage");
    cartModal.present();
  }

  goToOrderPage() {
    this.navCtrl.push("OrderPage");
  }
}
