import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigProductComponent } from './config-product.component';

describe('ConfigProductComponent', () => {
  let component: ConfigProductComponent;
  let fixture: ComponentFixture<ConfigProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
