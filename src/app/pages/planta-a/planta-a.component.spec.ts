import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaAComponent } from './planta-a.component';

describe('PlantaAComponent', () => {
  let component: PlantaAComponent;
  let fixture: ComponentFixture<PlantaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
