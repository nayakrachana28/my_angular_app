import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  //Instance that created for decorator
  @Output() counterEmitter=new EventEmitter();

  //This function will emit the the value to the Output Decorator
  assignValue(){
    this.counterEmitter.emit(this.countValue);
  }

  countValue=1;
  MAX=10;

  increment(){
    if(this.countValue==this.MAX)
    {
      return;
    }
    else{
      this.countValue++;
    }
    this.assignValue();
  }

  decrement(){
    if(this.countValue==1)
    {
      return;
    }
    else{
      this.countValue--;
    }
    this.assignValue();
  }


  ngOnInit(): void {
  }

}
