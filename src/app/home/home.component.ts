import { Component } from '@angular/core';
import { LeftSideComponent } from "../components/left-side/left-side.component";
import { RightSideComponent } from "../components/right-side/right-side.component";

@Component({
  selector: 'app-home',
  imports: [LeftSideComponent, RightSideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
