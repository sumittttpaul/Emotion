export const InputNumberOnly = (evt: React.KeyboardEvent<HTMLInputElement>) => {
  if (!/[0-9]/.test(evt.key)) {
    evt.preventDefault();
  }
};

export const InputChangeFocus = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const target = e.currentTarget as HTMLInputElement;
  const maxLength = parseInt(target.getAttribute('maxlength') ?? '0', 10);
  const myLength = target.value.length;
  if (myLength >= maxLength) {
    let next: HTMLElement | null = target.nextElementSibling as EventTarget &
      HTMLInputElement;
    while (next) {
      if (next.tagName.toLowerCase() === 'input') {
        (next as HTMLInputElement).focus();
        (next as HTMLInputElement).select();
        break;
      }
      next = next.nextElementSibling as EventTarget & HTMLInputElement;
    }
  }

  if (myLength === 0) {
    let previous: HTMLElement | null =
      target.previousElementSibling as EventTarget & HTMLInputElement;
    while (previous) {
      if (previous.tagName.toLowerCase() === 'input') {
        (previous as HTMLInputElement).focus();
        (previous as HTMLInputElement).select();
        break;
      }
      previous = previous.previousElementSibling as EventTarget &
        HTMLInputElement;
    }
  }
};

export const ClickToFocus = (e: React.MouseEvent<HTMLInputElement>) => {
  e.preventDefault();
  const target = e.currentTarget;
  target.focus();
  target.select();
};

export const CalculateAge = (DOB: string) => {
  const dateString = DOB;
  const dateParts: string[] = dateString.split('-');
  const dob = new Date(
    +dateParts[2],
    parseInt(dateParts[1]) - 1,
    +dateParts[0],
  );
  const month_diff = Date.now() - dob.getTime();
  const age_dt = new Date(month_diff);
  const year = age_dt.getUTCFullYear();
  const age = Math.abs(year - 1970);
  return age;
};

export const CalculateMonthNumber = (month: string) => {
  const d = Date.parse(month + '16, 2002');
  return new Date(d).getMonth() + 1;
};
