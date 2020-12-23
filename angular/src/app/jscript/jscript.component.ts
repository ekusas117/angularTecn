import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jscript',
  templateUrl: './jscript.component.html',
  styleUrls: ['./jscript.component.scss']
})
export class JscriptComponent implements OnInit {
  language = true;
  co = '{';
  co2 ='}';
  constructor() { }

  ngOnInit(): void {
  }

  functionName(params: string) {
    let variable = 0; // mutable variable
    /**
    introduce into es6
    block scope
    */
    var variable2 = 0; // mutable variable
    /**
    from the beginning js
    has function scope
    hoisted
    */
    const variable3 = 0; // immutable variable
    // cannot change the value
  }
}
