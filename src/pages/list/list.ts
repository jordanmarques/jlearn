import {Component, OnInit} from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Observable} from "rxjs";
import {DetailPage} from "../detail/detail";
import {KanaService} from "../../app/writing/service/kana-service";
import {ParentKana} from "../../app/writing/parent-kana";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage implements OnInit{
  items: Observable<ParentKana[]>;
  title: string;

  constructor(private parentKanaService: KanaService, public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(): void {
    this.title = "Groupes";
  }

  navigateToDetail(parentKana: ParentKana){
    this.navCtrl.push(DetailPage, {parentKana: parentKana})
  }

}
