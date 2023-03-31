import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Message } from '././Message';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'OnTheLow';
  public messages!: Message[];

  constructor(private messageService: MessageService ){}

  ngOnInit(): void {
    // this.getMessages();
  }
  // public getMessages(): void {
  //   this.messageService.getMessages().subscribe(
  //     (response: Message[]) => {
  //       this.messages = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }
}
