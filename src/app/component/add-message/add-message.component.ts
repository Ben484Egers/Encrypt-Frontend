import { HttpErrorResponse } from '@angular/common/http';
import { Message } from 'src/app/Message';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ServerMessage } from 'src/app/ServerMessage';
import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  @Output() onSubmitMsg: EventEmitter<Message> = new EventEmitter();

  message!: string;
  key_1!: number;
  key_2?: number;
  key_3?: number;
  encrypted: boolean = false;
  tryAgain: boolean = false;
  
  @Input() keys= 1;

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
    if(!this.message && !this.key_1){
      this.showWarning('Please add a message AND atleast one key', "Missing Arguments")
      return;
    }
    if (!this.message){
      this.showWarning('Please add a message', "Missing Message")
      return;
    } 
    if(!this.key_1){
      this.showWarning("Please add your 1st encryption key", "Missing Key")
      return;
    }

    if(this.key_1 > 26){
      this.showInfo("Ur Key should be between 1 & 26", "Out Of Bounds")
      return;
    }

    if(this.keys >= 2){
      if(!this.key_2 || this.key_2 > 26) {
        this.showInfo("Key 2 should be present & between 1 & 26", "Out Of Bounds")
        return;
      }
    }

    if(this.keys == 3) {
      if(!this.key_3 || this.key_3 > 26){
        this.showInfo("Key 3 should be present & between 1 & 26", "Out Of Bounds")
        return;
      }
    }

    const newMessage: Message = {
      message: this.message,
      key_1: this.key_1,
    }

    if(this.keys == 2){
      newMessage.key_2 = this.key_2
    
    }

    if(this.keys == 3){
      newMessage.key_2 = this.key_2
      newMessage.key_3 = this.key_3
    }

    this.messageService.encryptMessage(newMessage, this.keys).subscribe(
      (response: string) => {
          this.message = response;
        },
        (error: HttpErrorResponse) => {
          this.showError("Free resources are used up", "Could not encrypt message.");
        }
    );
    
    this.encrypted = true;
    this.tryAgain = true;

  }

  public encryptAgain() {
    this.encrypted = false;
    this.tryAgain = false;
    this.message = '';
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
          this.showError("Free resources are used up", "Message Not Saved!");
        }
    );

    this.encrypted = false;
    this.tryAgain = true;
  }

}
