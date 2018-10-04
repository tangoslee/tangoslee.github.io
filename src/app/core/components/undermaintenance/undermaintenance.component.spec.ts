import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndermaintenanceComponent } from './undermaintenance.component';

describe('UndermaintenanceComponent', () => {
  let component: UndermaintenanceComponent;
  let fixture: ComponentFixture<UndermaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndermaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndermaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
