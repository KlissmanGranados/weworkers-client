import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChatManagerService } from 'src/app/core/services/chat-manager.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  // channel: ChannelData;
  // username = '';
  // messages: Message[] = [];
  // newMessage = '';
  // channelList: ChannelData[];
  // chatClient: any;
  // currentUser: User;
  contactList = [];
  chatIds = [];
  currentChat;
  currentUser;
  currentReceived;
  newMessage = '';
  messages = [];

  constructor(private chatManager:ChatManagerService, private authService:AuthService) { }

   ngOnInit(): void {
    this.chatManager.connect();
    this.chatManager.listen('chat:init').subscribe((data) => {
      this.currentUser = this.authService.profile();
      for (let row of data) {
        if(!this.chatIds.includes(row.chat_id)) {
          this.contactList.push(row);
          this.chatIds.push(row);
        }
      }
      console.log(data);
    });
    this.chatManager.listen('chat:answer').subscribe((data) => {
      const currentTime = new Date();
      this.messages.push(
        {
          mensaje:data.message,
          chat_id:data.chat_id,
          usuarios_id:data.to,
          timestamp:currentTime,
          time:this.timeFormat(currentTime)
        }
      )
      console.log(data);
    });
    this.chatManager.listen('chat:messages').subscribe((data) => {

      for( let message of data) {
          message.time = this.timeFormat(new Date(message.timestamp))
          this.messages.push(message);
      }
      this.messages.shift();
      this.messages.shift();
      console.log(data);
    });
    this.chatManager.listen('chat:created').subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    this.chatManager.disconnect();
  }

  selectChat(chatId: number, receivedId:number): void {
    if(chatId !== this.currentChat) {
      this.messages = [];
      this.chatManager.selectChat(chatId);
      this.currentChat = chatId;
      this.currentReceived = receivedId;
    }
  }

  isUser(senderId: number): boolean {
    return this.currentUser.idusuario == senderId;
  }

  timeFormat(date:Date):String {
    const timeArray = date.toTimeString().split(' ')[0].split(':');
    timeArray.pop();
    return timeArray.join(':')+', '+date.toLocaleDateString('en-GB');
  }

  sendMessage() {
    if(!this.newMessage.replace(/\s/g, '').length) {
      console.log('mensaje vacío');
    }
    else {
      this.chatManager
      .sendMessage(this.currentReceived, this.currentChat, this.newMessage);
      this.messages.push({
        mensaje:this.newMessage,
        chat_id:this.currentChat,
        usuarios_id:Number(this.currentUser.idusuario),
        timestamp:new Date(),
        time:this.timeFormat(new Date())
      });
      this.newMessage = '';
    }
  }


}
