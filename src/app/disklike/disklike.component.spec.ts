import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisklikeComponent } from './disklike.component';

describe('DisklikeComponent', () => {
  let component: DisklikeComponent;
  let fixture: ComponentFixture<DisklikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisklikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisklikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
