import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  AbstractControl,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  genders = ['Man', 'Woman'];
  constructor(private fb: FormBuilder) {}

  validConfirmPassword(control: AbstractControl) {
    const password = control.get('userInfo.password');
    const confirmPassword = control.get('userInfo.confirmPassword');
    if (password?.value !== confirmPassword?.value) {
      return { incorrispondenza: true };
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userInfo: this.fb.group({
        name: this.fb.control(null, [
          Validators.required,
          Validators.minLength(5),
        ]),
        surname: this.fb.control(null, [
          Validators.required,
          Validators.minLength(5),
        ]),
        password: this.fb.control(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: this.fb.control(null, [
          Validators.required,
          this.validConfirmPassword,
        ]),
        username: this.fb.control(null, [
          Validators.required,
          Validators.minLength(5),
        ]),
        gender: this.fb.control('', Validators.required),
      }),
      imgProfile: this.fb.control(''),
      biography: this.fb.control('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });

    this.form.valueChanges.subscribe((status) => {
      console.log('Stato del form:', status);
    });
  }
  getErrorsC(name: string, error: string) {
    return this.form.get(name)?.errors![error];
  }

  getFormC(name: string) {
    return this.form.get(name);
  }

  submit() {
    console.log(this.form);
    console.log('Form correttamente inviato');
    this.form.reset();
  }
}
