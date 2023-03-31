import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safe-info',
  templateUrl: './safe-info.component.html',
  styleUrls: ['./safe-info.component.css']
})
export class SafeInfoComponent implements OnInit {
  safeMessage: string = 'We do not save the encryption key, for obvious reasons!'
  constructor() { }

  ngOnInit(): void {
  }

}
