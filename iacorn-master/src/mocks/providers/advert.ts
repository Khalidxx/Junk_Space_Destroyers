import { Injectable } from "@angular/core";

import { HomeBanner } from "../../models/advert";

@Injectable()
export class Advert {
  homeBanner: HomeBanner = {
    title: "这里放广告位",
    content: "这里放一些副标题",
    imgAddress:
      "https://images.pexels.com/photos/5317/food-salad-restaurant-person.jpg?cs=srgb&dl=beverages-brunch-cocktail-5317.jpg&fm=jpg"
  };

  constructor() {}

  getHomeBanner() {
    return this.homeBanner;
  }
}
