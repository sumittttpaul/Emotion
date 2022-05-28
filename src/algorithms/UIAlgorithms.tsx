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
