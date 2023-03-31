import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-key-form',
  templateUrl: './one-key-form.component.html',
  styleUrls: ['./one-key-form.component.css']
})
export class OneKeyFormComponent implements OnInit {
  message?: string;
  keyOne?: number;
  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(){}



}
