import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaBComponent } from './planta-b.component';

describe('PlantaBComponent', () => {
  let component: PlantaBComponent;
  let fixture: ComponentFixture<PlantaBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
