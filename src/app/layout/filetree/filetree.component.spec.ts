import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiletreeComponent } from './filetree.component';

describe('FiletreeComponent', () => {
  let component: FiletreeComponent;
  let fixture: ComponentFixture<FiletreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiletreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiletreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
