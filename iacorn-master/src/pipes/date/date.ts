import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment";

@Pipe({
  name: "date"
})
export class DatePipe implements PipeTransform {
  transform(date: number) {
    return moment(date).format("Do MMM, YYYY");
  }
}
