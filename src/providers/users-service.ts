import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  // private apiUri: String = 'https://share-photo-api-nodejs.herokuapp.com/users';
  private headers = new Headers({"Content-Type": "application/json"});

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
  }

  cadastrarUsuarioService(usuario) : Promise<any> {
    return this.http.post(usuario, 'https://share-photo-api-nodejs.herokuapp.com/users', this.headers)
                    .toPromise()
                    .then(res => res)
                    .catch(err => err)
  }

}
