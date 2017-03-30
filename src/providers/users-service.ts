import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  // private apiUri = 'https://share-photo-api-nodejs.herokuapp.com/users';
  private apiUri = 'http://localhost:3000/users';
  private headers = new Headers({"Content-Type": "application/json"});

  constructor(public http: Http) {
    console.log('Hello UsersService Provider');
  }

  cadastrarUsuarioService(usuario) : Promise<any> {
    return this.http.post(this.apiUri, usuario, {headers: this.headers})
                    .toPromise()
                    .then(res => res)
                    .catch(err => err)
  }

}
