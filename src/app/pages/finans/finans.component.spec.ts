import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinansComponent } from './finans.component';

describe('FinansComponent', () => {
  let component: FinansComponent;
  let fixture: ComponentFixture<FinansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
