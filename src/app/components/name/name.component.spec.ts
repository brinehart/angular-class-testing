import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameComponent } from './name.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Spy, createSpyFromClass } from 'jasmine-auto-spies';

describe('NameComponent', () => {
  let component: NameComponent;
  let fbSpy: Spy<FormBuilder>
  let routerSpy: Spy<Router>

  beforeEach(async(() => {
    fbSpy = createSpyFromClass(FormBuilder);
    routerSpy = createSpyFromClass(Router);
    TestBed.configureTestingModule({
      providers: [
        NameComponent,
        { provide: FormBuilder, useValue: fbSpy},
        { provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();
    component = TestBed.inject(NameComponent);
  }));

  describe('INIT', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('METHOD: updateName', () => {
    it('WHEN username is passed in THEN updated name', () => {
      //GIVEN
      const fakeName = 'FAKE NAME';
      //WHEN
      component.updateName(fakeName);
      //THEN
      expect(component.name).toEqual(fakeName);
    });
  });

  // describe('METHOD onSubmit', () => {
  //   it('WHEN nameForm is valid THEN router is called and name is updated', () => {
  //     //GIVEN
  //     const fakeName = 'FAKE NAME';
  //     routerSpy.navigate.and.callThrough();
  //     //WHEN
  //     component.nameForm = new FormGroup(() => {
  //       new FormControl()
  //     });
  //     component.nameForm.get('name')?.setValue(fakeName);
  //     //THEN
  //     expect(component.name).toEqual(fakeName);
  //     expect(routerSpy.navigate).toHaveBeenCalled();
  //   });
  // });
});
