import { MessageDTO } from './../MessageDTO';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { initSupabase } from '../utils/initSupabase';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  supabase: SupabaseClient = createClient(initSupabase.supabaseUrl, initSupabase.supabasePublicKey);

  constructor() { }

  public async addMessage(messageDTO: MessageDTO) {
    const {message, msg_id, created} = messageDTO;

    const {data, error} = await this.supabase
      .from("messages")
      .insert({message, msg_id, created})
    return {data, error}
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
}
