import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  public sendGetRequest() {
    return this.httpClient.get(this.REST_API_SERVER + "/students");
  }
}
