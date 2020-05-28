import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrateleiraComponent } from './prateleira.component';

describe('PrateleiraComponent', () => {
  let component: PrateleiraComponent;
  let fixture: ComponentFixture<PrateleiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrateleiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrateleiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
