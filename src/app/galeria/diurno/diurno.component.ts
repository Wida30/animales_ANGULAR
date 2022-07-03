import { Component, OnInit, Input } from '@angular/core';
import { habitadInterface } from 'src/app/modelos/animales.interfaces';

@Component({
  selector: 'app-diurno',
  templateUrl: './diurno.component.html',
  styleUrls: ['./diurno.component.scss'],
})
export class DiurnoComponent implements OnInit {
  

  @Input() public animales!: habitadInterface;

  ngOnInit(): void {}
}
