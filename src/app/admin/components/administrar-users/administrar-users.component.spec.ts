import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarUsersComponent } from './administrar-users.component';

describe('AdministrarUsersComponent', () => {
  let component: AdministrarUsersComponent;
  let fixture: ComponentFixture<AdministrarUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
