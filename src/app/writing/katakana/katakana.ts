import {Kana} from "../kana";
import {ParentKana} from "../parent-kana";

export class Katakana implements ParentKana{
  readonly main: Kana;
  readonly base: Kana[];
  readonly extended: Kana[];

  constructor(main: Kana, base: Kana[], extended: Kana[]) {
    this.main = main;
    this.base = base;
    this.extended = extended;
  }
}











