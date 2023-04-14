import { Pipe, PipeTransform } from "@angular/core";





@Pipe({
    name:'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string,limit?:number):string {
        //  console.log(value)
        let newlimit=limit ? limit:50
         return value.slice(0,newlimit)+"..."
    }

}