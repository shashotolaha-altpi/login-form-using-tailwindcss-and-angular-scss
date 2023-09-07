import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  
  darkmode = signal<boolean>(false)

  @HostBinding('class.dark') get mode(){
    return this.darkmode();
  }

}
