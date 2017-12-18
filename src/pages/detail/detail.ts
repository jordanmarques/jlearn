import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ParentKana} from "../../app/writing/parent-kana";

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit{

  private parentKana: ParentKana;

  constructor(public navCtrl: NavController, public navParams: NavParams, ) {
    this.parentKana = navParams.get('parentKana')
  }

  ngOnInit(): void {
  }
}
