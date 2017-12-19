import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ParentKana } from "../../app/writing/parent-kana";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  private parentKana: ParentKana;
  private title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.parentKana = navParams.get('parentKana');
    console.log(this.parentKana);
    this.title = `${this.parentKana.kana} ${this.parentKana.alphabet}`
  }
}
