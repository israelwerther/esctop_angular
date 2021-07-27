import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsctopComponent } from './esctop.component';

describe('EsctopComponent', () => {
  let component: EsctopComponent;
  let fixture: ComponentFixture<EsctopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsctopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsctopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
