import { Injectable } from '@angular/core';
import { Members } from './member.model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) {

  }
  readonly _baseUrl = "https://localhost:7259/api/Member";

  formData: Members = new Members();
  list?: Members[];

  postMember() {
    return this.http.post(this._baseUrl, this.formData);
  }

  putMember() {
    return this.http.put(`${this._baseUrl}/${this.formData.id}`, this.formData);
  }
  deleteMember(id: number) {
    return this.http.delete(`${this._baseUrl}/${id}`);
  }
  /*
  refreshList(): Observable<Members[]> {
    
    this.http.get(this._baseUrl)
      .toPromise()
      .then(res => this.list = res as Members[]);
       

    return this.http.get<Members[]>(this._baseUrl);
      }
   */
  refreshList(): Observable<Members[]> {
    return this.http.get<Members[]>(this._baseUrl)
      .pipe(
        tap(res => this.list = res), // Update the list property with the received data
        catchError(error => {
          console.error('Error fetching members:', error);
          throw error; // Rethrow the error to be handled by the caller
        })
      );
  }
}
