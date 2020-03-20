import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppContaierComponent } from './main-app-contaier.component';

describe('MainAppContaierComponent', () => {
  let component: MainAppContaierComponent;
  let fixture: ComponentFixture<MainAppContaierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAppContaierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppContaierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
