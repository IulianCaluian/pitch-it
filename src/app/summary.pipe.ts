import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    if(!value)return null;
    let actulaLimit = (limit) ? limit : 30;
    return value.substr(0,actulaLimit) + '';
  }

}
