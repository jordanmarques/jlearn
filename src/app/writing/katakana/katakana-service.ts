import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {KatakanaDao} from "./katakana-dao";
import {Katakana} from "./katakana";
import {Observable} from "rxjs";

@Injectable()
export class KatakanaService {

  constructor(public http: HttpClient, private katakanaDao: KatakanaDao) {
  }

  all(): Observable<Katakana[]> {
    return this.katakanaDao.all();
  }

}
