import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  url = environment.apiURL;

  constructor(private http: HttpClient) { }

  getNews() {
    //set X-api-key header
    return new Promise((resolve, reject) => {
      this.http.get(this.url, {
        headers: new HttpHeaders({
          'X-api-key': environment.apiKey
        })
      }).subscribe((data) => {
        resolve(data);
      }, (err) => {
        reject(err);
      })
    })
  }

  getNewsCategory(category: string) {
        const data = this.http.get(
          this.url + "?category=" + category, {
          headers: new HttpHeaders({
            'X-api-key': environment.apiKey
          })
        }
        )
    console.log(data)
    return data ;
      }


}
