import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'datePipe'
})
export class UserDatePipe implements PipeTransform {

  constructor(
    private datePipe: DatePipe
  ) { }

  transform(value: any, args?: any): any {
    return this.datePipe.transform(value, 'M/d/yy');
  }

}
