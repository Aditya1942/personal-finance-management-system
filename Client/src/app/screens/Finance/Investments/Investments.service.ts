import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchPaginationParams } from 'app/models/SearchPaginationParams';
import { environment } from 'environments/environment';
enum Api {
  getAll = 'investment',
  get = 'investment/',
  post = 'investment',
  put = 'investment/',
  delete = 'investment/',
  search = 'searchInvestment',
}
@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  getInvestments() {
    return this._http.get(this.baseUrl + Api.getAll);
  }

  getInvestment(id: number) {
    return this._http.get(this.baseUrl + Api.get + id);
  }

  addInvestment(data: any) {
    return this._http.post(this.baseUrl + Api.post, data);
  }

  updateInvestment(id: number, data: any) {
    return this._http.put(this.baseUrl + Api.put + id, data);
  }

  deleteInvestment(id: number) {
    return this._http.delete(this.baseUrl + Api.delete + id);
  }

  searchInvestments(data: SearchPaginationParams) {
    let params = new HttpParams();
    params = params.append('name', data.name.toString());
    params = params.append('batchSize', data.batchSize.toString());
    params = params.append('order', data.order.toString());
    params = params.append('pageNumber', data.pageNumber.toString());
    params = params.append('sortColumn', data.sortColumn.toString());

    return this._http.get(this.baseUrl + Api.search, {
      observe: 'body',
      params,
    });
  }
}
