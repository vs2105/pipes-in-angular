import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from '../model/data';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  transform(value: Iplayer[],searchtext:string): Iplayer[] {
    // console.log(searchtext)
    // return value
    if(!value){
      return[]
    }
    if(!searchtext){
      return value
    }
    let filterdArray=value.filter(playerobj=>{
      return playerobj.team.toLowerCase().startsWith(searchtext.toLowerCase())
    })
    return filterdArray
  }

}
