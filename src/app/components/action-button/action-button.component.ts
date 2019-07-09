import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent implements OnInit {
  @Input() action: any;
  @Input() disabled: boolean;
  @Input() xs: boolean;

  selectedActionButtonBg = 'red';
  actionButtonBg = 'green';

  constructor() { }

  ngOnInit() {
  }

}
