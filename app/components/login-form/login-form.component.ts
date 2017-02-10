import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: './login-form.html',
    styleUrls: ['./login-form.css']
})

export class LoginFormComponent {
    @Input() user:string = '';
    @Output() typeUser = new EventEmitter();

    onChange(newUser: string) {
        
        this.user = newUser;
        this.typeUser.emit(newUser)
        console.log('form : '+ this.user);
    }
} 