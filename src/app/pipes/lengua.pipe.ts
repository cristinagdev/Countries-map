import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lengua'
})
export class LenguaPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    if(value !== null && value!== 'undefined') {
      let dato: string[]= Object.values(value)
    
      return dato[0];
    }else {
      return "";
    }
    
  }

}
