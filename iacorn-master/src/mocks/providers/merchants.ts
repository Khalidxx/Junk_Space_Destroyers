import { Injectable } from "@angular/core";

import { Merchant } from "../../models/merchant";

@Injectable()
export class MerchantListProvider {
  merchantList: Merchant[] = [];
  constructor() {
    let merchantList = [
      {
        key: 1,
        name: "中国江湖菜",
        styles: ["中国菜"],
        specials: ["饺子", "面条"],
        rate: 4.7,
        approximateDeliveryTime: 30,
        averageOrderPerMonth: 15,
        distance: 1.4,
        logoLink:
          "https://lh3.googleusercontent.com/LiI75pRAc0_UsSe7qPkwtdebTusyHnFXzHOYh21clPhpOKMc2tiO1d8CY38RGf4t-3lkcS-XWotmXC4_w_9ivMM9ZaZkMhloBBMa9b8=s1024-c",
        isHalal: true,
        isPorkFree: false,
        startPrice: 20
      },
      {
        key: 2,
        name: "中国江湖菜",
        styles: ["中国菜"],
        specials: ["饺子", "面条"],
        rate: 4.7,
        approximateDeliveryTime: 30,
        averageOrderPerMonth: 15,
        distance: 1.4,
        logoLink:
          "https://lh3.googleusercontent.com/_xZbBBbPARwt5QEjNAf5D6mV96yRgciUVHhfJY7uXTCtPalf_KErscfNqr9iE65krue47JUCIsN09J43AinFUxcjyqy8HO6QwSxpV6xY=s1024-c",
        isHalal: true,
        isPorkFree: true,
        startPrice: 20
      },
      {
        key: 3,
        name: "中国江湖菜",
        styles: ["中国菜"],
        specials: ["饺子", "面条"],
        rate: 4.7,
        approximateDeliveryTime: 30,
        averageOrderPerMonth: 15,
        distance: 1.4,
        logoLink:
          "https://lh3.googleusercontent.com/LiI75pRAc0_UsSe7qPkwtdebTusyHnFXzHOYh21clPhpOKMc2tiO1d8CY38RGf4t-3lkcS-XWotmXC4_w_9ivMM9ZaZkMhloBBMa9b8=s1024-c",
        isHalal: true,
        isPorkFree: true,
        startPrice: 20
      },
      {
        key: 4,
        name: "中国江湖菜",
        styles: ["中国菜"],
        specials: ["饺子", "面条"],
        rate: 4.7,
        approximateDeliveryTime: 30,
        averageOrderPerMonth: 15,
        distance: 1.4,
        logoLink:
          "https://lh3.googleusercontent.com/LiI75pRAc0_UsSe7qPkwtdebTusyHnFXzHOYh21clPhpOKMc2tiO1d8CY38RGf4t-3lkcS-XWotmXC4_w_9ivMM9ZaZkMhloBBMa9b8=s1024-c",
        isHalal: true,
        isPorkFree: true,
        startPrice: 20
      },
      {
        key: 5,
        name: "中国江湖菜",
        styles: ["中国菜"],
        specials: ["饺子", "面条"],
        rate: 4.7,
        approximateDeliveryTime: 30,
        averageOrderPerMonth: 15,
        distance: 1.4,
        logoLink:
          "https://lh3.googleusercontent.com/LiI75pRAc0_UsSe7qPkwtdebTusyHnFXzHOYh21clPhpOKMc2tiO1d8CY38RGf4t-3lkcS-XWotmXC4_w_9ivMM9ZaZkMhloBBMa9b8=s1024-c",
        isHalal: true,
        isPorkFree: true,
        startPrice: 20
      }
    ];

    for (let merchant of merchantList) {
      this.merchantList.push(merchant);
    }
  }

  query() {
    return this.merchantList;
  }
}
