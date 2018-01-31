import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDecimal'
})
export class FilterDecimalPipe implements PipeTransform {

  
  transform(value: number, number: number): any {
    
    let options = { style: 'decimal' };
    return Intl.NumberFormat('pt-BR', options).format(value);
  }

}
