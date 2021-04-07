import {Component, Input, OnInit} from '@angular/core';
import {MenuButtonInterface} from '../interface/menu-button-interface';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent implements OnInit {

  @Input() data: MenuButtonInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
