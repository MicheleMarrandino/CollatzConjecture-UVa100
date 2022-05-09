import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';
import { noop } from 'rxjs';

@Pipe({
  name: 'boldText',
})
export class BoldTextPipe implements PipeTransform {
  constructor(private sanitizer: Sanitizer) {}
  transform(value: string): any {
    const regex = /[\*][\w\W]*[\*]/gim;
    return this.replace(value, regex);
  }

  replace(str, regex) {
    const matched = str.match(regex);
    if (matched) {
      matched.forEach((foundString) => {
        foundString = foundString.substring(1, foundString.length - 1);
        str = str.replace(regex, `<b>${foundString}</b>`);
      });
    } else { noop(); }
    return str;
  }
}
