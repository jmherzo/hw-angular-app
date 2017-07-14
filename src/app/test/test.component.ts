import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  myName = '';
  allowDisableBtn = true;
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

}
