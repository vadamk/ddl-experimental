import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandatesListComponent } from './mandates-list.component';

describe('MandatesListComponent', () => {
  let component: MandatesListComponent;
  let fixture: ComponentFixture<MandatesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandatesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
