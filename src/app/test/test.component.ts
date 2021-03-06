import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myName = '';
  allowDisableBtn = true;
  displayDetail = false;
  btnClicks = [];

  constructor() { }

  ngOnInit() {
  }

  onReset() {
    if (this.myName === '') {
        this.allowDisableBtn = true;
    }else {
        this.allowDisableBtn = false;
    }
      return this.allowDisableBtn;
  }

  onEraseInput() {
    this.myName = '';
  }

  onDisplayDetail() {
    this.displayDetail = !this.displayDetail;
      this.btnClicks.push( Date() );
  }

  btnsLength() { // Method to get the length of btnsClicks
    return String(this.btnClicks.length);
  }

}
