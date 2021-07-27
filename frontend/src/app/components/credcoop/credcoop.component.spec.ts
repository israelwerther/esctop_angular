import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredcoopComponent } from './credcoop.component';

describe('CredcoopComponent', () => {
  let component: CredcoopComponent;
  let fixture: ComponentFixture<CredcoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredcoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredcoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
