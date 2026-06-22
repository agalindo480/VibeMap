import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorProfile } from './creator-profile';

describe('CreatorProfile', () => {
  let component: CreatorProfile;
  let fixture: ComponentFixture<CreatorProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorProfile],
    }).compileComponents();

    fixture = TestBed.createComponent(CreatorProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
