import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NocheComponent } from './noche.component';

describe('NocheComponent', () => {
  let component: NocheComponent;
  let fixture: ComponentFixture<NocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NocheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
