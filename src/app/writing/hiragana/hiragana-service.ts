import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HiraganaDao} from "./hiragana-dao";
import {Hiragana} from "./hiragana";
import {Observable} from "rxjs";

@Injectable()
export class HiraganaService {

  constructor(public http: HttpClient, private hiraganaDao: HiraganaDao) {}

  all(): Observable<Hiragana[]>{
    return this.hiraganaDao.all();
  }

}
