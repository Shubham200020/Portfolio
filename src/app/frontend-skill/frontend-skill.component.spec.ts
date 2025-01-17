import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendSkillComponent } from './frontend-skill.component';

describe('FrontendSkillComponent', () => {
  let component: FrontendSkillComponent;
  let fixture: ComponentFixture<FrontendSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontendSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
