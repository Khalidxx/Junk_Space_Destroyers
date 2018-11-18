import { Injectable } from "@angular/core";

import { MerchantDetail } from "../../models/merchant";

@Injectable()
export class MerchantDetailProvider {
  merchantDetails: MerchantDetail[] = [];
  constructor() {
    let merchantDetails = [
      {
        profileImageLink:
          "https://lh3.googleusercontent.com/-ZX2gnPKhV64z5X5jkQjBZrLZsuCQzPMOjcGYoJUBwlUAbg1Y2rOscJZVhKabwr9pHm9s2VvFP-amp1uoy8VdM8jQB2oehzc4x4IqlY=s1024",
        location: {
          lat: 1,
          lng: 1,
          name: "digital mall"
        },
        contactNumber: "+60 199570000",
        workingTime: {
          start: "9:00",
          end: "19:00"
        },
        isWorking: false
      },
      {
        profileImageLink:
          "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=blur-breakfast-close-up-376464.jpg&fm=jpg",
        location: {
          lat: 1,
          lng: 1,
          name: "digital mall"
        },
        contactNumber: "+60 199570000",
        workingTime: {
          start: "9:00",
          end: "19:00"
        },
        isWorking: true
      },
      {
        profileImageLink:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=chips-dinner-fast-food-70497.jpg&fm=jpg",
        location: {
          lat: 1,
          lng: 1,
          name: "digital mall"
        },
        contactNumber: "+60 199570000",
        workingTime: {
          start: "9:00",
          end: "19:00"
        },
        isWorking: true
      },
      {
        profileImageLink:
          "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?cs=srgb&dl=beef-cooking-delicious-769289.jpg&fm=jpg",
        location: {
          lat: 1,
          lng: 1,
          name: "digital mall"
        },
        contactNumber: "+60 199570000",
        workingTime: {
          start: "9:00",
          end: "19:00"
        },
        isWorking: true
      },
      {
        profileImageLink:
          "https://images.pexels.com/photos/8313/food-eating-potatoes-beer-8313.jpg?cs=srgb&dl=dinner-food-meal-8313.jpg&fm=jpg",
        location: {
          lat: 1,
          lng: 1,
          name: "digital mall"
        },
        contactNumber: "+60 199570000",
        workingTime: {
          start: "9:00",
          end: "19:00"
        },
        isWorking: true
      }
    ];

    for (let merchantDetail of merchantDetails) {
      this.merchantDetails.push(merchantDetail);
    }
  }
  query(key: number) {
    if (key > 0 && key <= this.merchantDetails.length) {
      return this.merchantDetails[key - 1];
    } else {
      return null;
    }
  }
}
