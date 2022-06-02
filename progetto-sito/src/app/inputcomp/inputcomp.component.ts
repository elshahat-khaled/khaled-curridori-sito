import { Component, Input, OnInit } from '@angular/core';
import { Stazioni } from '../stazioni.model';

@Component({
  selector: 'app-inputcomp',
  templateUrl: './inputcomp.component.html',
  styleUrls: ['./inputcomp.component.css']
})
export class InputcompComponent implements OnInit {
  @Input() listaDati : Stazioni[]  = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
