import { Component } from '@angular/core';
import { Ifiles, Iplayer } from './shared/model/data';
import { Cricketers } from './shared/const/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',],
})
export class AppComponent {
  title ='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab nostrum, fugit iusto distinctio soluta enim quae inventore? Numquam autem unde suscipit cumque ipsum, natus optio provident assumenda eveniet itaque sapiente porro doloremque quia, maiores fugit adipisci fugiat sed quibusdam minus esse officiis! Similique aliquid nemo doloremque consequuntur? Nisi, distinctio numquam.';
   searchbyvalue!:string
  filesarray:Array<Ifiles>=[
    {
      name:"Form-16",
      size:22455996,
      type:"pdf"
    },
    {
      name:"Salary Slips",
      size:38455671,
      type:"pdf"
    },
    {
      name:"TDS",
      size:44845561,
      type:"pdf"
    }
  ]

  playersArray:Iplayer[]=Cricketers
}
