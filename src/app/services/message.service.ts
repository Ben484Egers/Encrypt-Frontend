import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders }from '@angular/common/http';
import { Message } from '../Message';
import { environment } from 'src/environments/environment';
import { ServerMessage } from '../ServerMessage';
import { Status } from '../Status';
import { MessageDTO } from '../MessageDTO';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // public getMessages(): Observable<ServerMessage[]>{
  //   return this.http.get<ServerMessage[]>(`${this.apiServerUrl}`)
  // }
  public addMessage(message: MessageDTO): Observable<number>{
    return this.http.post<number>(`${this.apiServerUrl}`, message, httpOptions)
  }
  // public updateMessage(message: Message): Observable<Message>{
  //   return this.http.put<Message>(`${this.apiServerUrl}/update`, message)
  // }
  public deleteMessage(primaryKey: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/delete/${primaryKey}`)
  }

  public findMessage(messageId:string): Observable<ServerMessage>{
    return this.http.get<any>(`${this.apiServerUrl}/find/${messageId}`)
  }

  public encryptMessage(message: Message, keys: number): Observable<string>{
    return this.http.post<string>(`${this.apiServerUrl}/encrypt/${keys}`,message, httpOptions)
  }
  public decryptMessage( message : Message, keys: number): Observable<string>{
    return this.http.post<string>(`${this.apiServerUrl}/decrypt/${keys}`, message, httpOptions)
  }

}
