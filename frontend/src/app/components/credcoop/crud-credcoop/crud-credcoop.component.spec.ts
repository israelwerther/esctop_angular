import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCredcoopComponent } from './crud-credcoop.component';

describe('CrudCredcoopComponent', () => {
  let component: CrudCredcoopComponent;
  let fixture: ComponentFixture<CrudCredcoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCredcoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCredcoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
