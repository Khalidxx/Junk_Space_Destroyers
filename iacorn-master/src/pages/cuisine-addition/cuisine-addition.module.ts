import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuisineAdditionPage } from './cuisine-addition';

@NgModule({
  declarations: [
    CuisineAdditionPage,
  ],
  imports: [
    IonicPageModule.forChild(CuisineAdditionPage),
  ],
})
export class CuisineAdditionPageModule {}
