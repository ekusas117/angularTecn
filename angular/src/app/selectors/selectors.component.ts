import { Component, OnInit } from '@angular/core';
import { SelectorType } from '../selector-detail/selector-type';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss', './../css/css.component.scss']
})
export class SelectorsComponent implements OnInit {
  public enumTypes = SelectorType;
  constructor() { }

  ngOnInit(): void {
  }

}
