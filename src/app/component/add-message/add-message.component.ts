import { EncryptionService } from './../../services/encryption.service';
import { Message } from 'src/app/Message';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { ToastrService } from 'ngx-toastr';
import { MessageDTO } from 'src/app/MessageDTO';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {
  @Output() onSubmitMsg: EventEmitter<Message> = new EventEmitter();

  message!: string;
  key_1!: number;
  key_2: number = 0;
  key_3: number = 0;
  encrypted: boolean = false;
  tryAgain: boolean = false;
  
  @Input() keys= 1;

  constructor(private messageService: MessageService, private encryptionService: EncryptionService ,private toastr: ToastrService ) { }
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

    const newMessage: Message = {
      message: this.message,
      keys: [this.key_1],
    }

    if(this.keys == 2){
      newMessage.keys = [this.key_1, this.key_2]
    }

    if(this.keys == 3){
      newMessage.keys = [this.key_1, this.key_2, this.key_3]
    }

    let encryptedMessage = this.encryptionService.encryptMessage(newMessage)
    this.message = encryptedMessage;
    this.encrypted = true;
    this.tryAgain = true;

  }

  public encryptAgain() {
    this.encrypted = false;
    this.tryAgain = false;
    this.message = '';
  }

  public async saveCrypt(){
    if(!this.message){
      this.showInfo('Can\'t save an empty field', "Missing message")
      return;
    }

    const msg_id = Math.floor(100000 + Math.random() * 900000);
    const created = new Date();

    const msg: MessageDTO = {
      message:  this.message,
      msg_id: msg_id,
      created: created
    }

    const response = await this.messageService.addMessage(msg);
    
    if(response.error) {
      this.showError("Message could not be saved, please try again..", "Something went wrong!");
    } else {
      this.showSuccess("🌴Message has been added✨, Find your message id in the text input", "Message added")
        this.message = "Your message id: " + msg_id;
    }

    this.encrypted = false;
    this.tryAgain = true;
  }

}
