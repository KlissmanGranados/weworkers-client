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
      console.log(data);
    });
    this.chatManager.listen('chat:messages').subscribe((data) => {
      let timeArray = [];

      for( let message of data) {
          message.timestamp = new Date(message.timestamp);
          timeArray =  message.timestamp.toTimeString().split(' ')[0].split(':');
          timeArray.pop();
          message.time =timeArray.join(':')
          +', '+message.timestamp.toLocaleDateString('en-GB');
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

  selectChat(chatId: number): void {
    if(chatId !== this.currentChat) {
      this.messages = [];
      this.chatManager.selectChat(chatId);
      this.currentChat = chatId;
    }
  }

  isUser(senderId: number): boolean {
    return this.currentUser.idusuario == senderId;
  }

  sendMessage() {
    if(!this.newMessage.replace(/\s/g, '').length) {
      console.log('mensaje vacío');
    }
    else {
      console.log(this.newMessage);
      this.newMessage = '';
    }
  }


}
