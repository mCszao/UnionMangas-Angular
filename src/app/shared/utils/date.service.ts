import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }
  postDate(date: Date | string | undefined) {
    if (!date) {
      return ""
    }
    if (typeof date === 'string') {
      return this.verifyDateStr(date);
    }
    return `${date.getFullYear()}-${this.completeDig(date.getMonth())}-${this.completeDig(date.getDate())}`;
  }

  getDate(date: string) {
    let dateArray = date.split("-");
    if (dateArray.length < 3) {
      return date;
    }
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  }

  verifyDateStr(date: string) {
    let dateArray = date.split("/");
    if (dateArray.length < 3) {
      return date;
    }
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  }


  completeDig(num: number, size: number = 2) {
    let str = num + "";
    while (str.length < size) {
      str = "0" + str;
    }
    return str;
  }
}
