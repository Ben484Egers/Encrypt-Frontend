import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encrypt-page',
  templateUrl: './encrypt-page.component.html',
  styleUrls: ['./encrypt-page.component.css']
})
export class EncryptPageComponent implements OnInit {

  constructor() { }

  keys: number = 1;
  
  ngOnInit(): void {
  }

  public setKey( keyNumber: number) {
    this.keys = keyNumber;
  }

}
