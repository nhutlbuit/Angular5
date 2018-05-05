import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'app';
  public showlineIf = false;
  public color ="red";
  public colors: string[]= ["red","blue","green"];
  public cOne = false;
  public cTwo = true;
 @Input() name:string;
  
  toggle(){
    this.cOne = !this.cOne;
    this.cTwo = !this.cTwo
  }

  onSubmit(value:string){
    
    console.log(value);
  }
  

}
