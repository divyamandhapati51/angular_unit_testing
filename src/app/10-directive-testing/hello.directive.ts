import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: [HelloDirective]
})
export class HelloDirective implements OnInit {
@Input('userInfo') username: string;
@HostBinding('style.background-color') backgroundColor: string;
@HostBinding('style.font-size') fontSize: string;
@HostBinding('innerHTML') innerHTML: string;
constructor() {
}
ngOnInit(): void {
  this.innerHTML = 'hello ' + this.username;
  this.fontSize = '18px';
  this.backgroundColor = 'green';
}
@HostListener('mouseover') onMouseOver() {
  this.fontSize = '28px';
  this.backgroundColor = 'orange';
}
  @HostListener('mouseout') onMouseOut() {
    this.fontSize = '18px';
    this.backgroundColor = 'green';
  }
}
