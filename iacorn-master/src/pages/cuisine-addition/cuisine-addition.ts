import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { CartStore } from "../../stores";

interface AdditionModal {
  name: string;
  choosedId: string;
}

@IonicPage()
@Component({
  selector: "page-cuisine-addition",
  templateUrl: "cuisine-addition.html"
})
export class CuisineAdditionPage {
  cuisine: any;
  additionsModal: AdditionModal[] = [];
  quantity: number = 0;

  constructor(
    public navCtrl: NavController,
    params: NavParams,
    public viewCtrl: ViewController,
    public store: CartStore
  ) {
    this.cuisine = params.get("cuisine");
    for (let i = 0; i < this.cuisine.additions.length; i++) {
      this.additionsModal.push({
        name: this.cuisine.additions[i].name,
        choosedId: this.cuisine.additions[i].default
      });
    }
  }

  ionViewDidLoad() {}

  switchOption(additionIndex: number, id: string) {
    this.additionsModal[additionIndex].choosedId = id;
  }

  addQuantity() {
    this.quantity++;
  }

  subQuantity() {
    this.quantity--;
  }

  hideModal() {
    this.viewCtrl.dismiss();
  }

  addToCart() {
    let tempAdditions = this.additionsModal.map(item => {
      return {
        name: item.name,
        choosedId: item.choosedId,
        choosedName: null
      };
    });

    let tempCuisineCart = {
      id: this.cuisine.id,
      name: this.cuisine.name,
      quantity: this.quantity,
      additions: tempAdditions,
      price: null
    };

    this.store.addCuisine(this.cuisine, tempCuisineCart);
    this.hideModal();
  }
}
