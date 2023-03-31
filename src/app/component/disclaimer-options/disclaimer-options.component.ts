import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disclaimer-options',
  templateUrl: './disclaimer-options.component.html',
  styleUrls: ['./disclaimer-options.component.css']
})
export class DisclaimerOptionsComponent implements OnInit {
  encrypt: string = 'Encrypt'
  decrypt: string = 'Decrypt'

  constructor() { }

  ngOnInit(): void {
  }

}
