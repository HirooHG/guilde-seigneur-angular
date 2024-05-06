import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastlesComponent } from './castles.component';

describe('CastlesComponent', () => {
  let component: CastlesComponent;
  let fixture: ComponentFixture<CastlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CastlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CastlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
