import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messagecontent:string="";
  messages: string[]=[];
  rooms=[];
  roomslist:string="";
  roomnotice:string="";
  currentroom:string="";
  isinRoom=false;
  newroom:string="";
  numusers:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
