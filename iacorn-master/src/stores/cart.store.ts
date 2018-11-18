import { observable, action } from "mobx-angular";
import { Injectable } from "@angular/core";
import { Cuisine } from "../models";

interface Addition {
  name: string;
  choosedId: string;
  choosedName: string;
}
interface CuisineCart {
  id: string;
  name: string;
  quantity: number;
  additions: Addition[];
  price: number;
}

@Injectable()
export class CartStore {
  @observable amount: number = 0;
  @observable quantity: number;
  @observable list: CuisineCart[] = [];

  @action
  addCuisine(cuisine: Cuisine, cuisineCart: CuisineCart) {
    if (cuisineCart == null) {
      for (let i = 0; i < this.list.length; i++) {
        if (cuisine.id == this.list[i].id) {
          this.list[i].quantity++;
          this.amount += cuisine.basePrice;
          return;
        }
      }
      this.list.push({
        id: cuisine.id,
        name: cuisine.name,
        quantity: 1,
        additions: null,
        price: cuisine.basePrice
      });
      this.amount += cuisine.basePrice;
      return;
    }

    let tempPrice: number = cuisine.basePrice;
    if (cuisine.additions != null) {
      for (let i = 0; i < cuisine.additions.length; i++) {
        for (let j = 0; j < cuisine.additions[i].options.length; j++) {
          if (
            cuisine.additions[i].options[j].id ==
            cuisineCart.additions[i].choosedId
          ) {
            cuisineCart.additions[i].choosedName =
              cuisine.additions[i].options[j].name;
            tempPrice += cuisine.additions[i].options[j].plusPrice;
          }
        }
      }
    }
    cuisineCart.price = tempPrice;
    console.log(cuisineCart);
    this.list.push(cuisineCart);
    this.amount += tempPrice * cuisineCart.quantity;
  }

  @action
  simplyAddOne(index: number) {
    this.list[index].quantity++;
    this.amount += this.list[index].price;
  }

  @action
  simplyDeleteOne(index: number) {
    this.list[index].quantity--;
    this.amount -= this.list[index].price;
    if (this.list[index].quantity == 0) {
      this.list.splice(index, 1);
    }
  }
}
