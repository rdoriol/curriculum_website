import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryTopHeaderComponent } from './secondary-top-header.component';

describe('SecondaryTopHeaderComponent', () => {
  let component: SecondaryTopHeaderComponent;
  let fixture: ComponentFixture<SecondaryTopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryTopHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
