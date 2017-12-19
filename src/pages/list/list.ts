import {Component, OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs";
import {DetailPage} from "../detail/detail";
import {ParentKana} from "../../app/writing/parent-kana";
import {KanaService} from "../../app/writing/service/kana-service";
import {WritingType} from "../../app/writing/writing-type";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage implements OnInit{
  readonly type: WritingType;

  items: Observable<ParentKana[]>;
  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private kanaService: KanaService) {
    this.type = navParams.get('writingType');
  }

  ngOnInit(): void {
    this.title = this.type;
    this.items = this.kanaService.kanasFor(this.type);
  }

  navigateToDetail(parentKana: ParentKana){
    this.navCtrl.push(DetailPage, {parentKana: parentKana})
  }

}
