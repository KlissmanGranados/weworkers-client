import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatManagerService {

  urlApi = "https://weworkers-server.herokuapp.com/";
  socket;
  token = this.authService.gettoken();

  constructor(private authService: AuthService) {}

  connect(): void {
    const token = this.token;
    this.socket = io(this.urlApi, {query:{token}});
  }

  disconnect():void {
    if(this.socket) {
      this.socket.disconnect();
    }
  }

  listen(eventName: string):Observable<any> {
    return new Observable((subscriber) =>{
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

  sendMessage(receivedId:number, chatId:number, message:string):void {
    this.socket.emit('chat:send',{to:receivedId, message:message, chatId: chatId});
    console.log("mensaje enviado");
  }

  selectChat(chatId:number):void {
    this.socket.emit('chat:select', chatId);
  }

  /*

  setupSocketConnection():void {
    this.socket.on('chat:init',data => console.log(data));
    this.socket.on('chat:answer', data => console.log(data));
    this.socket.on('chat:messages', data => console.log(data));
    this.socket.on('chat:created', data => console.log(data));
  }

  sendMessage(receivedId:number, chatId:number, message:string):void {
    this.socket.emit('chat:send',{to:receivedId,message:message, chatId: chatId});
    console.log("mensaje enviado");
  }

  selectChat(chatId:number):void {
    this.socket.emit('chat:select', chatId);
  }

  createChat(proyectoId:number, loggedUser:number, receivedUser:number):void {
    this.socket.emit('chat:create', {proyectoId:proyectoId, loggedUser:loggedUser, receivedUser:receivedUser});
  }

  */
}
