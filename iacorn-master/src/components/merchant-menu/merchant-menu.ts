import { Component } from "@angular/core";
import { ModalController, NavController } from "ionic-angular";

import { MerchantStore, CartStore } from "../../stores";
import { Cuisine } from "../../models";

@Component({
  selector: "merchant-menu",
  templateUrl: "merchant-menu.html"
})
export class MerchantMenuComponent {
  constructor(
    public merchantStore: MerchantStore,
    public cartStore: CartStore,
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {}

  presentAdditionModal(cuisine: Cuisine) {
    let additionModal = this.modalCtrl.create("CuisineAdditionPage", {
      cuisine
    });
    additionModal.present();
  }

  addCuisine(cuisine: Cuisine) {
    this.cartStore.addCuisine(cuisine, null);
  }

  presentCartModal() {
    let cartModal = this.modalCtrl.create("CartPage");
    cartModal.present();
  }

  goToOrderPage() {
    this.navCtrl.push("OrderPage");
  }
}
