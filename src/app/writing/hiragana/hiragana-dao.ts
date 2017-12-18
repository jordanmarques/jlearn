import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hiragana } from "./hiragana";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class HiraganaDao {

  constructor(private http: HttpClient) {}

  all(): Observable<Hiragana[]>{
    return this.http.get<Hiragana[]>('../../assets/data/hiraganas.json');
  }

}
