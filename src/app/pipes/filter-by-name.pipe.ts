import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: any, text?: any): any {
    
    if (!text) {
      return items;
    }
    
    text = text.toLowerCase();
    return items.filter(item => item.game.name.toLowerCase().includes(text));
  }

}
