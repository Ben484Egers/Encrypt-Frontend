export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {               // the data expected from .select()
            id: number,
            msgId: number,
            message: string,
            created: string,
        }
        Insert: {            // the data to be passed to .insert()
          id?: never         // generated columns must not be supplied
          message: string       // `not null` columns with no default must be supplied
          msg_id: number // nullable columns can be omitted
          created: string
        }
        Update: {            // the data to be passed to .update()
          id?: never
          message: string      // `not null` columns are optional on .update()
          msg_id: number
          created: string
        }
      }
    }
  }
}