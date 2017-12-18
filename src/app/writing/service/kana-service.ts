import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {KatakanaService} from "../katakana/katakana-service";
import {HiraganaService} from "../hiragana/hiragana-service";
import {ParentKana} from "../parent-kana";
import {Observable} from "rxjs";
import {WritingType} from "../writing-type";

@Injectable()
export class KanaService {

  constructor(public http: HttpClient, private katakanaService: KatakanaService, private hiraganaService: HiraganaService) {}

  types(): WritingType[]{
    return Object.keys(WritingType)
      .map(key => WritingType[key] )
  }

}
