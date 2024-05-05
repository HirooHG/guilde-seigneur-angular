import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildCasteItemComponent } from './guild-caste-item.component';

describe('GuildCasteItemComponent', () => {
  let component: GuildCasteItemComponent;
  let fixture: ComponentFixture<GuildCasteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildCasteItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuildCasteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
