import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfieldsComponent } from './inputfields.component';

describe('InputfieldsComponent', () => {
  let component: InputfieldsComponent;
  let fixture: ComponentFixture<InputfieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputfieldsComponent]
    });
    fixture = TestBed.createComponent(InputfieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
