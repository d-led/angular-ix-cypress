import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeOtherComponentComponent } from './some-other-component.component';

describe('SomeOtherComponentComponent', () => {
  let component: SomeOtherComponentComponent;
  let fixture: ComponentFixture<SomeOtherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeOtherComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeOtherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
