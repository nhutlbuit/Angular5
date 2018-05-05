import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements AfterViewInit {
  title = 'Sign In';
  msgs = [];
  @ViewChild('name') username: ElementRef;


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
    this.username.nativeElement.focus();
  }

 


}
