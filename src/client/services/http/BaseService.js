/* eslint-disable no-undef */
import axios from 'axios';
import getClientConfig from '../../config'

export class BaseService {
  constructor(route) {
    const { host,port } = getClientConfig;
    this.url = `http://${host}:${port}/api/${route}`;
  }

  getHeaders()  {
    const headers = {'Content-Type': 'application/json'};
    return headers;
  }
  
  get(id){
    return axios.get(`${this.url}/${id}`, {headers: this.getHeaders()})
                  .then(resp => {
                    return resp.data;
                  }).catch(error => {
                    return error.response.data
                  });
  }
  getAll(){
    return axios.get(`${this.url}`, {headers: this.getHeaders()})
                 .then(resp => {
                   return resp.data;
                 }).catch(error => {
                   return error.response.data
                 });
  }

  add = (item) => {
    return axios.post(`${this.url}`,item, {headers: this.getHeaders()})
                .then(resp => {
                  return resp ;
                }).catch(error => {
                  return error.response
                });
  }
  update = (id,user)=>{
    return axios.patch(`${this.url}/${id}`,user, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
  delete= (id)=>{
    return axios.delete(`${this.url}/${id}`, {headers: this.getHeaders()})
                .then(resp => {
                  return resp;
                }).catch(error => {
                  return error.response
                });
  }
}