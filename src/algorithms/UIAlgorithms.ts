import { KeyboardEvent } from 'react';

const FROM0 = 48;
const TO9 = 57;
const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const DELETE = 46;
const SPACEBAR = 32;

export const InputNumberOnly = (evt: any) => {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
};

export const InputChangeFocus = (e: any) => {
  var target = e.srcElement || e.target;
  var maxLength = parseInt(target.attributes['maxlength'].value, 10);
  var myLength = target.value.length;
  if (myLength >= maxLength) {
    var next = target;
    while ((next = next.nextElementSibling)) {
      if (next == null) break;
      if (next.tagName.toLowerCase() === 'input') {
        next.focus();
        next.select();
        break;
      }
    }
  }
  if (myLength === 0) {
    var previous = target;
    while ((previous = previous.previousElementSibling)) {
      if (previous == null) break;
      if (previous.tagName.toLowerCase() === 'input') {
        previous.focus();
        previous.select();
        break;
      }
    }
  }
};

export const ClickToFocus = (e: any) => {
  e.preventDefault();
  var target = e.srcElement || e.target;
  target.focus();
  target.select();
};

export const CalculateAge = (DOB: string) => {
  var dateString = DOB;
  var dateParts: any = dateString.split('-');
  var dob = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  return age;
};

export const CalculateMonthNumber = (month: string) => {
  var d = Date.parse(month + '16, 2002');
  return new Date(d).getMonth() + 1;
};
