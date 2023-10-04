import { MessageDTO } from './../MessageDTO';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders }from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSupabase } from '../utils/initSupabase';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // private apiServerUrl = environment.apiBaseUrl;
  supabase: SupabaseClient = createClient(initSupabase.supabaseUrl, initSupabase.supabasePublicKey);

  constructor(private http: HttpClient) { }

  public async addMessage(messageDTO: MessageDTO) {
    const {message} = messageDTO;
    const msg_id = Math.floor(100000 + Math.random() * 900000);
    const created = new Date();

    const {data, error} = await this.supabase
      .from("messages")
      .insert({message, msg_id, created})
    return {data, msg_id, error}
  }

  public async findMessage(messageId:string) {
    const {data, error} = await this.supabase
      .from("messages")
      .select()
      .eq('msg_id', messageId)
      .single()
    return {data, error}
  }

  public async deleteMessage(messageId:string) {

  const { data, error } = await this.supabase
  .from('messages')
  .delete()
  .eq('msg_id', messageId)

  return {data, error}
  }

    // public getMessages(): Observable<ServerMessage[]>{
  //   return this.http.get<ServerMessage[]>(`${this.apiServerUrl}`)
  // }

  // public addMessage(message: MessageDTO): Observable<number>{
  //   return this.http.post<number>(`${this.apiServerUrl}`, message, httpOptions)
  // }
  // public updateMessage(message: Message): Observable<Message>{
  //   return this.http.put<Message>(`${this.apiServerUrl}/update`, message)
  // }
  // public deleteMessage(primaryKey: number): Observable<void>{
  //   return this.http.delete<void>(`${this.apiServerUrl}/delete/${primaryKey}`)
  // }

  // public findMessage(messageId:string): Observable<ServerMessage>{
  //   return this.http.get<any>(`${this.apiServerUrl}/find/${messageId}`)
  // }

  // public encryptMessage(message: Message, keys: number): Observable<string>{
  //   return this.http.post<string>(`${this.apiServerUrl}/encrypt/${keys}`,message, httpOptions)
  // }
  // public decryptMessage( message : Message, keys: number): Observable<string>{
  //   return this.http.post<string>(`${this.apiServerUrl}/decrypt/${keys}`, message, httpOptions)
  // }

}
