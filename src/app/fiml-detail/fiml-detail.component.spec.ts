import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FimlDetailComponent } from './fiml-detail.component';

describe('FimlDetailComponent', () => {
  let component: FimlDetailComponent;
  let fixture: ComponentFixture<FimlDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FimlDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FimlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
