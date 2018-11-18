import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { CartStore } from "../../stores";

@IonicPage()
@Component({
  selector: "page-cart",
  templateUrl: "cart.html"
})
export class CartPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public store: CartStore,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {}

  simplyAddOne(index: number) {
    this.store.simplyAddOne(index);
  }

  simplyDeleteOne(index: number) {
    this.store.simplyDeleteOne(index);
  }

  hideModal() {
    this.viewCtrl.dismiss();
  }
}
