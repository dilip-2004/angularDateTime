import { Component } from '@angular/core';

@Component({
  selector: 'app-left-side',
  imports: [],
  templateUrl: './left-side.component.html',
  styleUrl: './left-side.component.css'
})

export class LeftSideComponent {
  localTime: string = new Date().toLocaleString();  

  changeTime(){
    this.localTime=new Date().toLocaleString();
  }

  constructor () {
    setInterval(() => {
      this.changeTime();
    }, 1000);
  }
}
