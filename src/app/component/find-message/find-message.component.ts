import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Message } from '../../Message';
import { ServerMessage } from 'src/app/ServerMessage';
import { MessageService } from 'src/app/services/message.service';
import { Status } from 'src/app/Status';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-message',
  templateUrl: './find-message.component.html',
  styleUrls: ['./find-message.component.css']
})
export class FindMessageComponent implements OnInit {
  msgPrimarykey!: number
  message!: string;
  key!: number;
  messageId!: string;
  decrypted: boolean = false;
  
  constructor(private messageService: MessageService, private toastr: ToastrService ) { }

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
    if(!this.key){
      this.showWarning('Please add the corresponding key',"Missing Key")
      return;
    }

    const decryptMsg: Message = {
      message: this.message,
      key: this.key
    }

    this.messageService.decryptMessage(decryptMsg).subscribe(
      (response: string) => {
          this.message = response;
        },
        (error: HttpErrorResponse) => {
          this.showError(error.message, "Can't Decrypt Message");
        }
    );
    this.decrypted = true;
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
          this.showWarning(error.message, "Unable 2 Delete");
        }
    );

    this.message= ''
    this.messageId= '';
    this.key = 0;
    this.decrypted = false;
  }

}


  
