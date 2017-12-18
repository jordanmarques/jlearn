import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {KatakanaService} from "../katakana/katakana-service";
import {HiraganaService} from "../hiragana/hiragana-service";
import {Observable} from "rxjs";
import {WritingType} from "../writing-type";

@Injectable()
export class KanaService {

  constructor(public http: HttpClient, private katakanaService: KatakanaService, private hiraganaService: HiraganaService) {}

  types(): WritingType[]{
    return Object.keys(WritingType)
      .map(key => WritingType[key] )
  }

  kanasFor(type: WritingType): Observable<any[]>{
    switch(type){
      case WritingType.KATAKANA:
        return this.katakanaService.all();
      case WritingType.HIRAGANA:
        return this.hiraganaService.all();
      default:
        throw "No Kanas found for ${type} writing type";
    }
  }

}
