import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  name: string;
  nameForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nameForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.nameForm.valid) {
      const userName = this.nameForm.get('name')?.value;
      this.updateName(userName)
      this.router.navigate(['characters']);
    }
  }

  updateName(userName: string) {
    this.name = userName
  }
}
