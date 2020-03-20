import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PostTextMessageResponse, PostTextMessage } from 'src/app/models/PostTextMessage.model';
const APIendpoint = environment.apiEndPointUrl;

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {
  constructor(private httpClient: HttpClient) {}

  async postTextMessage(data: PostTextMessage) {
     const response = await this.httpClient.post<PostTextMessageResponse>(`${APIendpoint}/toUpperCase`, {data}).toPromise();
     return response;
  }
}
