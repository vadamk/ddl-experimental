import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateListItemComponent } from './mandate-list-item.component';

describe('MandateListItemComponent', () => {
  let component: MandateListItemComponent;
  let fixture: ComponentFixture<MandateListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandateListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
