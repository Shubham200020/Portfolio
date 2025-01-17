import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseSkillsComponent } from './database-skills.component';

describe('DatabaseSkillsComponent', () => {
  let component: DatabaseSkillsComponent;
  let fixture: ComponentFixture<DatabaseSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseSkillsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
