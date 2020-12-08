import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { PostService } from '../serivces/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  form: FormGroup;

  nestedForm: FormGroup;

  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      body: '',
      userId: 1
    });

    this.form.valueChanges.subscribe(console.log);

    // nested form

    const user = this.fb.group({
      email: ['',
        [
          Validators.minLength(5),
          Validators.email
        ]
      ],
      name: '',
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')
      ]],
      age: [null, 
        [
          Validators.required,
          Validators.min(18),
          Validators.max(90)
        ]] 
    });

    this.nestedForm = this.fb.group({
      title: '',
      body: '',
      author: user,
      editor: user
    });

    // dynamic form

    this.dynamicForm = this.fb.group({
      title: '',
      body: '',
      users: this.fb.array([])
    });
  }

  get userForm(): FormArray {
    return this.dynamicForm.get('users') as FormArray;
  }

  addUser() {
    const user = this.fb.group({
      email: '',
      name: '',
      password: ''
    });

    this.userForm.push(user);
  }

  deleteUser(i: number): void {
    this.userForm.removeAt(i);
  }

  submitForm(): void {
    const values = this.form.value;
    this.postService.addPost(values).subscribe(console.log);
  }

  get age() {
    return this.nestedForm.get('author.age');
  }

  get password() {
    return this.nestedForm.get('author.password');
  }
}
