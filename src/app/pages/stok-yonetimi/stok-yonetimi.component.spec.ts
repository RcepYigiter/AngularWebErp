import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokYonetimiComponent } from './stok-yonetimi.component';

describe('StokYonetimiComponent', () => {
  let component: StokYonetimiComponent;
  let fixture: ComponentFixture<StokYonetimiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StokYonetimiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokYonetimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
