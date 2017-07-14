import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessalertComponent } from './sucessalert.component';

describe('SucessalertComponent', () => {
  let component: SucessalertComponent;
  let fixture: ComponentFixture<SucessalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SucessalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
