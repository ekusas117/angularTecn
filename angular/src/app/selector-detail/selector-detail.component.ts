import { Component, Input, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SelectorType } from './selector-type';

@Component({
  selector: 'app-selector-detail',
  templateUrl: './selector-detail.component.html',
  styleUrls: ['./selector-detail.component.scss']
})
export class SelectorDetailComponent implements OnInit {
  @Input() type: string;
  public enumTypes = SelectorType;


  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet,{
      data: 'hola'
    });
  }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  template: 'Hi',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>, private data: MatBottomSheetConfig) {
    console.log(_bottomSheetRef, data);
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
