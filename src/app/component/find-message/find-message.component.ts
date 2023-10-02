import { EncryptionService } from './../../services/encryption.service';
import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Message } from '../../Message';
import { ServerMessage } from 'src/app/ServerMessage';
import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-message',
  templateUrl: './find-message.component.html',
  styleUrls: ['./find-message.component.css']
})
export class FindMessageComponent implements OnInit {
  msgPrimarykey!: number
  messageId!: string;
  message!: string;
  key_1!: number;
  key_2: number = 0;
  key_3: number = 0;
  decrypted: boolean = false;
  tryAgain: boolean = false;

  @Input() keys= 1;
  
  constructor(private messageService: MessageService, private encryptionService: EncryptionService ,private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    if(!this.decrypted){
      this.onDecrypt()
    } else {
      this.deleteMessage();
    }
     
  }

  private toastConfig: any = {
    progressBar: true,
    progressAnimation: 'increasing',
    positionClass: 'toast-top-center',
    tapToDismiss: true,
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

private showError(text:string, title?:string) {
  this.toastr.error(text, title, this.toastConfig);
}


  public onDecrypt(){
    if(!this.message && !this.key_1){
      this.showWarning('Please add a message AND atleast one key', "Missing Arguments")
      return;
    }
    if (!this.message){
      this.showWarning('Please add/find a message', "Missing Message")
      return;
    } 
    if(!this.key_1){
      this.showWarning("Please add your 1st encryption key", "Missing Key")
      return;
    }

    if(this.key_1 > 26){
      this.showInfo("Your Keys should be between 0 & 26", "Out Of Bounds")
      return;
    }

    if(this.keys >= 2){
      if(this.key_2 > 26) {
        this.showInfo("Key 2 should be between 0 & 26", "Out Of Bounds")
        return;
      }
    }

    if(this.keys == 3) {
      if(this.key_3 > 26){
        this.showInfo("Key 3 should be between 0 & 26", "Out Of Bounds")
        return;
      }
    }

    const decryptMsg: Message = {
      message: this.message,
      keys: [this.key_1],
    }

    if(this.keys == 2){
      decryptMsg.keys = [this.key_1, this.key_2]
    }

    if(this.keys == 3){
      decryptMsg.keys = [this.key_1, this.key_2, this.key_3]
    }

    let decryptedMessage = this.encryptionService.decryptMessage(decryptMsg)
    this.message = decryptedMessage;
    this.decrypted = true;
    this.tryAgain = true;
  }

  public decryptAgain() {
    this.decrypted = false;
    this.tryAgain = false;
    this.message = '';
  }

  public findMessage(){
    if(!this.messageId){
      this.showInfo('Please enter a message Id', "No Id")
      return;
    }

    const Id = {
      id: this.messageId
    }

    this.messageService.findMessage(this.messageId).subscribe(
      (response:  ServerMessage) => {
          this.message = response.message
          this.msgPrimarykey = response.id
          this.decrypted = false;
        },
        (error: HttpErrorResponse) => {
          // alert(error.message);
          this.showError("No message found with id: " + this.messageId,"Message Not Found")
        }
    );

  }
   public deleteMessage(){
    if(!this.message){
      this.showInfo('Can\'t delete an empty field', "Empty Field")
      return;
    }

    const visualId: string = this.messageId;

    this.messageService.deleteMessage(this.msgPrimarykey).subscribe(
      () => {
          this.showInfo("Message with id: "+ visualId +" has been deleted!", "Message Deleted")
        },
        (error: HttpErrorResponse) => {
          this.showWarning("Free resources are used up", "Unable 2 Delete");
        }
    );

    this.message= ''
    this.messageId= '';
    this.key_1 = 0;
    this.key_2 = 0;
    this.key_3 = 0;
    this.decrypted = false;
  }

}


  
