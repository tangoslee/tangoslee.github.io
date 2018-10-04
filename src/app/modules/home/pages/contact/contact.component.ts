import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '@app/core';
import { HomeService } from '@app/modules/home/services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private homeService: HomeService,
  ) {
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.maxLength(100)
      ]],
      message: ['', [
        Validators.required,
        Validators.maxLength(4000)
      ]]
    });
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  send(f: FormGroup) {
    // console.log('send:', [f.value]);
    this.appService.loading();
    this.homeService.send(f.value)
      .subscribe(data => {
        // console.log('data:', data);
        this.appService.unloading();
        this.appService.setAlert('Your message has been sent.');
        this.contactForm.reset();
      }, err => {
        // console.log('err:', err);
        this.appService.unloading();
        this.appService.setAlert('Sorry, the mail server is not responding. Please try again later!', {type: 'alert-danger'});
      });
  }

}
