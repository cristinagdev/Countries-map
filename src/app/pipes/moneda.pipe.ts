import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneda'
})
export class MonedaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {

    if(value !== null && value!== 'undefined') {
      const moneda:any= (Object.values(value)[0])
      return moneda.name+ ' - ' + moneda.symbol;
    } else {
      return "";
    }
    
  }

}
