import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPTijerasComponent } from './pptijeras.component';

describe('PPTijerasComponent', () => {
  let component: PPTijerasComponent;
  let fixture: ComponentFixture<PPTijerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPTijerasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPTijerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
