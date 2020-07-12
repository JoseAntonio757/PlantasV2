import { async, TestBed } from '@angular/core/testing';

import { ContPlantaAComponent } from './cont-planta-a.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContPlantaAComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ContPlantaAComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PlantasV'`, () => {
    const fixture = TestBed.createComponent(ContPlantaAComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PlantasV');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(ContPlantaAComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to PlantasV!');
  });
});
