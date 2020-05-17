import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = environment.apiUrl;

  constructor(private httpClient : HttpClient) { }

  public sendGetRequest(url : string) {
    return this.httpClient.get(this.REST_API_SERVER + url);
  }

  public sendPostRequest(url : string, formData : FormData) {
	console.log("Sending post request: " + this.REST_API_SERVER + url);
//    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })};

	return this.httpClient.post(this.REST_API_SERVER + url, formData, 
	                     httpOptions).subscribe(
		      (res) => console.log(res),
              (err) => console.log(err)
	);
  }
}
