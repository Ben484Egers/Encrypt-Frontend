import { Injectable } from '@angular/core';
import { Message } from '../Message';


@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  public encryptMessage(message: Message): string {
    let result = '';
    //extract data from Message object
    const messageString = message.message;
    let keys = message.keys;

    //This variable wil hold de current index in the keys Array
    let keyIndex = 0;
  
    for (let i = 0; i < messageString.length; i++) {
      let charCode = messageString.charCodeAt(i);
      // check that charCode is a lowercase letter; automatically ignores non-letters
      if (charCode > 96 && charCode < 123) {
        
        //If indexNumber is out of bounds, go back to the begining of keys array
        if(keyIndex >= keys.length){
          keyIndex = 0;
        }

        //If encryption key is bigger than 26, divide by 26 and return remainder.
        if(keys[keyIndex] > 26) {
            keys[keyIndex] = keys[keyIndex] % 26
        }

        //Shift charcode with current key
        charCode += keys[keyIndex]

        // if shift passes 'z', resets to 'a' to maintain looping shift
        if (charCode > 122) {
          charCode = (charCode - 122) + 96;
        // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
        } else if (charCode < 97) {
          charCode = (charCode - 97) + 123;
        }
      }
      //charCode is a uppercase letter; automatically ignores non-letters
      if (charCode > 64 && charCode < 91) {
        
        if(keyIndex >= keys.length){
          keyIndex = 0;
        }

        charCode += keys[keyIndex]
        
        if (charCode > 90) {
          charCode = (charCode - 90) + 64;
        } else if (charCode < 65) {
          charCode = (charCode - 65) + 91;
        }
      }

      keyIndex++;
  
      result += String.fromCharCode(charCode);
    }
    return result;
  }
  public decryptMessage(message: Message): string {
    let result = '';
    const messageString = message.message;
    let keys = message.keys;

    let keyIndex = 0;
  
    for (let i = 0; i < messageString.length; i++) {
      let charCode = messageString.charCodeAt(i);
      // check that charCode is a lowercase letter; automatically ignores non-letters
      if (charCode > 96 && charCode < 123) {
        
        if(keyIndex >= keys.length){
          keyIndex = 0;
        }

        //If encryption key is bigger than 26, divide by 26 and return remainder.
        if(keys[keyIndex] > 26) {
          keys[keyIndex] = keys[keyIndex] % 26
      }
        //Shift charcode with current key
        charCode -= keys[keyIndex]

        // if shift passes 'z', resets to 'a' to maintain looping shift
        if (charCode > 122) {
          charCode = (charCode - 122) + 96;
        // same as previous, but checking shift doesn't pass 'a' when shifting negative numbers
        } else if (charCode < 97) {
          charCode = (charCode - 97) + 123;
        }
      }
  
      //charCode is a uppercase letter; automatically ignores non-letters
      if (charCode > 64 && charCode < 91) {
        
        if(keyIndex >= keys.length){
          keyIndex = 0;
        }

        charCode -= keys[keyIndex]
        
        if (charCode > 90) {
          charCode = (charCode - 90) + 64;
        } else if (charCode < 65) {
          charCode = (charCode - 65) + 91;
        }
      }

      keyIndex++;
  
      result += String.fromCharCode(charCode);
    }
    return result;
  }
}
