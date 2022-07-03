import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiurnoComponent } from './diurno.component';

describe('DiurnoComponent', () => {
  let component: DiurnoComponent;
  let fixture: ComponentFixture<DiurnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiurnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
