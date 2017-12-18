import {Kana} from "../kana";
import {ParentKana} from "../parent-kana";

export class Hiragana implements ParentKana{
  readonly main: Kana;
  readonly base: Kana[];

  constructor(main: Kana, base: Kana[]) {
    this.main = main;
    this.base = base;
  }
}











