import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitenavListComponent } from './sitenav-list.component';

describe('SitenavListComponent', () => {
  let component: SitenavListComponent;
  let fixture: ComponentFixture<SitenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitenavListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
