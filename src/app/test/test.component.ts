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
  btnClicksPlus = [];
  theFithElement = true;
  clicksLength = '';
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
    if (this.btnClicks.length >= 5) {
      this.theFithElement = false;
      this.btnClicksPlus.push(1);
    }else {
      this.btnClicks.push(1);
    }
  }

  onFithItem() {
    // return this.btnClicks.length > 5 ? 'blue' : 'white';
    return 'blue';
  }

  btnsLength() { // Method to get the length of btnsClicks
    return String(this.btnClicks.length);
  }

  btnsPlusLength() { // Method to get the length of btnsClicksPlus
    return String(this.btnClicksPlus.length);
  }

}
