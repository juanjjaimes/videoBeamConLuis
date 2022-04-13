import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarVideoBeamsComponent } from './administrar-video-beams.component';

describe('AdministrarVideoBeamsComponent', () => {
  let component: AdministrarVideoBeamsComponent;
  let fixture: ComponentFixture<AdministrarVideoBeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrarVideoBeamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarVideoBeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
