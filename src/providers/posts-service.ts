import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {

  private apiUri = 'https://share-photo-api-nodejs.herokuapp.com';
  // private apiUri = 'http://localhost:3000';
  private headers = new Headers({"Content-Type": "application/json"});

  constructor(public http: Http) {
    console.log('Hello PostsService Provider');
  }

  postarFotoService(post) : Promise<any> {
    return this.http.post(`${this.apiUri}/posts`, post, { headers: this.headers })
             .toPromise()
             .then(res => res)
             .catch(err => err)
  }

}
