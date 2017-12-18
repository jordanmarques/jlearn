import {Component, OnInit} from '@angular/core';
import { NavController } from "ionic-angular";
import { ListPage } from "../list/list";
import {KanaService} from "../../app/writing/service/kana-service";
import {WritingType} from "../../app/writing/writing-type";

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  private types: WritingType[];

  constructor(private navController: NavController, private kanaService: KanaService) {}

  ngOnInit(): void {
    this.types = this.kanaService.types();
  }

  navigateToList(type: WritingType){
    console.log(type);
    this.navController.push(ListPage, {writingType: type})
  }
}
