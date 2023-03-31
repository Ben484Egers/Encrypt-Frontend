import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-cards',
  templateUrl: './intro-cards.component.html',
  styleUrls: ['./intro-cards.component.css']
})
export class IntroCardsComponent implements OnInit {
  leftmessageHeading: string = 'How Does It Work?'
  leftmessage: string = 'You enter your “secret” message into the input field. You choose a key which wil be used to encrypt and later decrypt the message.'
  rightmessageHeading: string = 'How does the receiver get the message?'
  rightmessage: string = 'You save the encrypted message to our database. You get a message id back, which you give to the receiver along with the key. The receiver can go to the decryption section and search for the message with the given id en decrypt it with the given key.'

  constructor() { }

  ngOnInit(): void {
  }

}
