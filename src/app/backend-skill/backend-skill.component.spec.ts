import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendSkillComponent } from './backend-skill.component';

describe('BackendSkillComponent', () => {
  let component: BackendSkillComponent;
  let fixture: ComponentFixture<BackendSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackendSkillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
