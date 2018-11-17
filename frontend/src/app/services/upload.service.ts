import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UploadService {
    constructor(
        private http: HttpClient
    ) { };

    getString() {
        return this.http.get('api/cos');
    }
    pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
        const formdata: FormData = new FormData();
        formdata.append('file', file);
        const req = new HttpRequest('POST', 'api/upload', formdata, {
          reportProgress: true,
          responseType: 'text'
        });
        return this.http.request(req);
      }
       checkHellwig(fileName: string) {
        const params = new HttpParams().set('fileName', fileName);
        return this.http.get('api/hellwig', { params });
    }
    mnkWithHellwig(name: string) {
        //const params = new HttpParams().set('newModelName', name);
        return this.http.get('api/mnkWithHellwig');
    }
}