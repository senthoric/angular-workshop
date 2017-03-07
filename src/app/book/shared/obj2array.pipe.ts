import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obj2array'
})
export class Obj2arrayPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let arr = [];
    for (let key in value) {
      arr.push({key: key, value: value[key]});
    }
    return arr;
  }
}
