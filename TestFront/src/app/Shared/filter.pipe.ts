import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //categories

  transform(value: any[], filterString:string, propName:string): any[] {
    const result:any=[]
    if(!value || filterString===''|| propName==='')
    {
      return value;
    }
    value.forEach((a:any)=>{
      if(a['category'].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
  });
  return result;
  }

}


