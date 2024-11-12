import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StokKartiComponent } from './stok-karti.component';

describe('StokKartiComponent', () => {
  let component: StokKartiComponent;
  let fixture: ComponentFixture<StokKartiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StokKartiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StokKartiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
