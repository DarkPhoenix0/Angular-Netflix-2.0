import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFilmsComponent } from './new-films.component';

describe('NewFilmsComponent', () => {
  let component: NewFilmsComponent;
  let fixture: ComponentFixture<NewFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
