import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment";

@Pipe({
  name: "moment"
})
export class MomentPipe implements PipeTransform {
  transform(date: string) {
    return moment(date, "HH:mm").format("hh:mm A");
  }
}
