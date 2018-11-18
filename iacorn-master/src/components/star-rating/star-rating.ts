import { Component, Input } from "@angular/core";

@Component({
  selector: "star-rating",
  templateUrl: "star-rating.html"
})
export class StarRatingComponent {
  rateArray: number[] = [1, 1, 1, 1, 1];
  @Input()
  set rate(rate: number) {
    if (rate >= 0 && rate <= 5) {
      let i = 0;
      while (i < Math.floor(rate)) {
        this.rateArray[i] = 1;
        i++;
      }
      let temp = rate - Math.floor(rate);
      if (temp > 0.2) {
        this.rateArray[i] = 0.5;
        if (temp >= 0.7) {
          this.rateArray[i] = 1;
        }
        i++;
      }
      while (i < 5) {
        this.rateArray[i] = 0;
        i++;
      }
    }
  }

  constructor() {}
}
