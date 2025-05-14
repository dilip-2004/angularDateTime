import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-right-side',
  imports: [CommonModule],
  templateUrl: './right-side.component.html',
  styleUrl: './right-side.component.css'
})
export class RightSideComponent {

  private apiurl="https://datetimewebapi.runasp.net/api/";
  timeZoneId:string='';
  selectedTime:string="Time Zone Not Selected";
  isLoading:boolean=false;

  http = inject(HttpClient);

  $timeZones=this.getAllTimezones();

  getAllTimezones() {
    return this.http.get<any>(this.apiurl + "Home");
  }

  getTimeById(post:any) {
    return this.http.post(this.apiurl+ 'Home/time', post);
  }

  selectTimeZone(event:Event) {
    const target = event.target as HTMLSelectElement;
    this.timeZoneId=target.value;
    this.isLoading=true;
    setInterval(()=>{
      this.getTimeById({ timeZoneId: this.timeZoneId }).subscribe((response: any) => {
        this.selectedTime = response.time;  
        this.isLoading=false;    
      });
    },1000);
  }
}
