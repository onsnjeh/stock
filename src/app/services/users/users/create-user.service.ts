import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

    private apiUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) {}

    getUsers(): Observable<User> {
      return this.http.get<User>(this.apiUrl);
    }

    getUser(id: number): Observable<User> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<User>(url);
    }

    createUser(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrl, user);
    }

    updateUser(user: User): Observable<User> {
      const url = `${this.apiUrl}/${user.id}`;
      return this.http.put<User>(url, user);
    }

    deleteUser(id: number): Observable<User> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete<User>(url);
    }
}
