import { HttpErrorResponse } from '@angular/common/http';
import { Message } from 'src/app/Message';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerMessage } from 'src/app/ServerMessage';
import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  @Output() onSubmitMsg: EventEmitter<Message> = new EventEmitter()
  message!: string;
  key!: number;
  encrypted: boolean = false;
  tryAgain: boolean = false;


  constructor(private messageService: MessageService, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    if(!this.encrypted){
      this.onEncrypt()
    } else {
      this.saveCrypt();
    }
  }

  private toastConfig: any = {
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-center',
      tapToDismiss: true,
      closeButton: false,
      timeOut: 3000,
      preventDuplicates: true,
      includeTitleDuplicates: true,
      resetTimeoutOnDuplicate: true

  }

  private showSuccess(text:string, title?: string) {
    this.toastr.success(text, title, this.toastConfig);
  }
  
  private showInfo(text:string, title?: string) {
    this.toastr.info(text, title, this.toastConfig);
  }
  private showWarning(text:string, title?: string) {
    this.toastr.warning(text, title, this.toastConfig);
  }
  private showError(text:string, title?:string,) {
    this.toastr.error(text, title, this.toastConfig);
  }

  public onEncrypt(){
    if(!this.message && !this.key){
      this.showWarning('Please add a message AND a key', "Missing Arguments")
      return;
    }
    if (!this.message){
      this.showWarning('Please add a message', "Missing Message")
      return;
    } 
    if(!this.key){
      this.showWarning("Please add a encryption key", "Missing Key")
      return;
    }

    if(this.key > 26){
      this.showInfo("Key should be between 1 & 26, My bwoy", "Out Of Bounds")
      return;
    }

    const newMessage: Message = {
      message: this.message,
      key: this.key
    }

    this.messageService.encryptMessage(newMessage).subscribe(
      (response: string) => {
          this.message = response;
        },
        (error: HttpErrorResponse) => {
          this.showError(error.message, "Could not encrypt message.");
        }
    );
    
    this.encrypted = true;
    this.tryAgain = true;

  }

  public encryptAgain() {
    this.encrypted = false;
    this.tryAgain = false;
    this.message = '';
    this.key = 0;
  }

  public saveCrypt(){
    if(!this.message){
      this.showInfo('Can\'t save an empty field', "Missing message")
      return;
    }

    const msg: Message = {
      message:  this.message
    }

    this.messageService.addMessage(msg).subscribe(
      (msgId) => {
        this.showSuccess("🌴Message has been added✨, Find your message id in the text input", "Message added")
        this.message = "Your message id: " + msgId;
        },

        (error: HttpErrorResponse) => {
          this.showError(error.message, "Message Not Saved!");
        }
    );

    this.encrypted = false;
    this.tryAgain = true;
  }

}
