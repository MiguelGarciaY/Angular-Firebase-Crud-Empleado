import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualiceComponentComponent } from './actualice-component.component';

describe('ActualiceComponentComponent', () => {
  let component: ActualiceComponentComponent;
  let fixture: ComponentFixture<ActualiceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualiceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualiceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
