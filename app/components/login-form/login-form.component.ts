import { Component, Input} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'login-form',
    templateUrl: './login-form.html',
    styleUrls: ['./login-form.css']
})

export class LoginFormComponent {
    @Input() user:string = '';

} 