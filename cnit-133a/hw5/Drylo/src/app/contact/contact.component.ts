import { Component, OnInit } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  msg = new Message('', '', '', false);
  resultName: string;
  resultEmail: string;
  resultMessage: string;
  submitted: boolean = false;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    this.resultName = this.msg.name;
    this.resultEmail = this.msg.email;
    this.resultMessage = this.msg.message;
  }
}
