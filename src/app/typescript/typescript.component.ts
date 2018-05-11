import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'typescript-root',
  templateUrl: './typescript.component.html'
})
export class TypeScriptComponent implements AfterViewInit{
  public title = 'app';
  public showlineIf = true;
  public color ="red";
  public colors: string[]= ["red","blue","green"];
  public cOne = false;
  public cTwo = true;
  msgs = [];
  @ViewChild('name') username: ElementRef;

 @Input() name:string;
  
  toggle(){
    this.cOne = !this.cOne;
    this.cTwo = !this.cTwo
  }

  onClick() {
    console.log("clicked");
  }

  onChange(event) {
    console.log(event);
    console.log(event.target.value);
    this.msgs.push(event.target.value);
    // alert("using viewChild:"+this.username.nativeElement.value);
  }

  onChangePass(event) {
    //  alert("password is:"+event.target.value);
  }
  ngAfterViewInit() {
   // this.username.nativeElement.focus();
  }



}
