import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor() {
    console.log("1.constructor called...");
    debugger
  }

  @Input() myvalue = "hello"
  counter: any;
  num: number = 1;

  ngOnInit(): void {
    console.log("3.ngOnInit called...");
    this.counter = setInterval(() => {
      this.num = this.num + 1;
      console.log(this.num);
    }, 1000)
  }
  ngOnChanges(changes: SimpleChanges) {
    debugger
    console.log("2.ngOnChanges called...");
    console.log("2.SimpleChanges called...", changes);
  }

  ngDoCheck() {
    console.log("4.ngDoCheck called...");
  }

  ngAfterContentInit(): void {
    console.log("5.ngAfterContentInit called...");
  }

  ngAfterContentChecked() {
    console.log("6.ngAfterContentChecked called...");
  }

  ngAfterViewInit(): void {
    console.log("7.ngAfterViewInit called...");
  }

  ngAfterViewChecked(): void {
    console.log("8.ngAfterViewChecked called...");
  }

  ngOnDestroy(): void {
    console.log("9.ngOnDestroy called...");
    clearInterval(this.counter)
  }

}
