import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrypt-page',
  templateUrl: './decrypt-page.component.html',
  styleUrls: ['./decrypt-page.component.css']
})
export class DecryptPageComponent implements OnInit {

  constructor() { }

  keys: number = 1;

  ngOnInit(): void {
  }

  public setKey( keyNumber: number) {
    this.keys = keyNumber;
  }

}
