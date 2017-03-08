import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'obj2array'
})
export class Obj2arrayPipe implements PipeTransform {
  transform(value, args: string[]): any {
    let arr = [];
    for (let key in value) {
      arr.push({key: key, value: value[key]});
    }
    return arr;
    // let res = this.getAllKeys(value);
    // console.log(res);
    
    // return res;

    //   arr.push(key);
    //   if (typeof value[key] === 'object') {

    //   }


  }

  getAllKeys(obj) {
    let array = [];
    let i = 0;
    for(let key in obj){
      array.push({key: key, value: obj[key]});
      if (typeof obj[key] === 'object') {
        array[i].value = this.getAllKeys(obj[key]);
      }
      i++;
    }
    return array; 
  }
}
