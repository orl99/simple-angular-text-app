import { Component, OnInit } from '@angular/core';
import { AppServicesService } from 'src/app/services/app-services.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // Inputs
  textInput: string;

  uppercaseText: string;
  constructor(private appServices: AppServicesService) { }

  ngOnInit() {
  }

  async onSubmit(ngFrom: NgForm) {
    const formValue = ngFrom.value;
    console.log('value', formValue);
    const dto = { text: formValue.textInput };
    const response = await this.appServices.postTextMessage(dto);
    console.log('Server Response', response);
    if (!!response.status) {
      this.uppercaseText =  response.text;
    } else {
      alert(response.text);
    }
    this.textInput = '';
  }

}
