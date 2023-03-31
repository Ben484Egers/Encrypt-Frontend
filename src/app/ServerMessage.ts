import { Status } from "./Status";

export interface ServerMessage {
    id: number,
    msgId: number,
    message: string,
    status: Status,
    created: string,
    redeemed: string
}