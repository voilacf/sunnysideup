export class Utils {
  /*
   * returns true if provided string only contains utf-8 letters
   * */
  public static isInputValid(userInput: string): boolean {
    return /^\p{L}+$/u.test(userInput);
  }

  public static extractTimeFromDate(date: Date, european?: boolean): string {
    let hours = date.getHours();
    if (!european) {
      hours = hours > 12 ? hours - 12 : hours;
      const suffix:string = hours > 12 ? "p.m." : "a.m.";
      return `${hours}:${date.getMinutes()} ${suffix}`;
    }
    return `${hours}:${date.getMinutes()}`;
  }

  public static extractDate(date: Date, european: boolean): string{
    if (european) {
      return `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
    }
    return `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}`;
  }

  public static getLocalTime(timezone: number): Date {
    return new Date(Date.now() + (timezone - new Date().getTimezoneOffset() * 60) * 100);
  }
}

