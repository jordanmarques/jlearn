import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Katakana} from "./katakana";
import {Observable} from "rxjs";

@Injectable()
export class KatakanaDao {

  constructor(public http: HttpClient) {
  }

  all(): Observable<Katakana[]>{
    return this.http.get<Katakana[]>('../../assets/data/katakanas.json');
  }

}
