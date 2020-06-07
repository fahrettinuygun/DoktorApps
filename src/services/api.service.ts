import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestParameterModel } from 'src/models/request-parameter-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private reqModel: RequestParameterModel,
    private header: HttpHeaders
  ) { 
  }

  parseParameters = function(parameter: [{key,value}]){
    parameter.forEach(param => {
      this.reqModel.params.append(param.key,param.value);
    });
  }
  get = function(parameters){
    this.parseParameters(parameters);
    return this.http.get(this.reqModel);
  }

  // post = function(parameters){
  //   this.parseParameters(parameters);
  //   //return this.http.post(this.reqModel);

  //   this.http.post(
  //     'http://localhost:8080/login',
  //     {title: 'Doktorapps Frontend'},
  //     { headers: null, 
  //       observe: null, 
  //       params: [{'mail': mail, 'password': password}],reportProgress:false, responseType: "json",withCredentials:false })
  // }

  delete = function(parameters){
    this.parseParameters(parameters);
    return this.http.delete(this.reqModel);
  }
}
