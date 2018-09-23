import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() id: 'string';
  @Input() name: 'string';
  @Input() placeholder: 'string';
  @Input() type: 'text' | 'email' | 'password';

  constructor() { }

  ngOnInit() {
  }

}
