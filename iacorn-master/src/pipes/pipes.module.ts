import { NgModule } from "@angular/core";
import { MomentPipe } from "./moment/moment";
import { DatePipe } from "./date/date";
@NgModule({
  declarations: [MomentPipe, DatePipe],
  imports: [],
  exports: [MomentPipe, DatePipe]
})
export class PipesModule {}
