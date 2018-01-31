import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixImgName'
})
export class FixImgNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value.includes('{width}')) {
      value = value.replace('{width}', 1400);
    }

    if (value.includes('{height}')) {
      value = value.replace('{height}', 1500);
    }
    
    return value;
  }

}
