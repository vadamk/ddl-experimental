import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  validateField(field: AbstractControl, submited?: boolean) {
    return field.invalid && (field.dirty || field.touched || submited);
  }
}
