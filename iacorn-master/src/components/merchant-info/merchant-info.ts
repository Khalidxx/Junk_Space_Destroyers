import { Component } from '@angular/core';

/**
 * Generated class for the MerchantInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'merchant-info',
  templateUrl: 'merchant-info.html'
})
export class MerchantInfoComponent {

  text: string;

  constructor() {
    console.log('Hello MerchantInfoComponent Component');
    this.text = 'Hello World';
  }

}
