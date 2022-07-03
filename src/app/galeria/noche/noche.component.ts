import { Component, OnInit, Input } from '@angular/core';
import { habitadInterface } from 'src/app/modelos/animales.interfaces';

@Component({
  selector: 'app-noche',
  templateUrl: './noche.component.html',
  styleUrls: ['./noche.component.scss']
})
export class NocheComponent implements OnInit {

  @Input() public animales!: habitadInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
