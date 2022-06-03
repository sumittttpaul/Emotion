export const InputNumberOnly = (evt: any) => {
  var ch = String.fromCharCode(evt.which);
  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
};

export const InputChangeFocus = (e: any) => {
  e.preventDefault();
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
};

export const CalculateAge = (DOB: string) => {
  var dateString = DOB;
  var dateParts: any = dateString.split('-');
  var dob = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  if (age) return age;
};
