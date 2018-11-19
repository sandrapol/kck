import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class UploadService {
    fileName: string;
    constructor(
        private http: HttpClient
    ) { };

    pushFileToStorage(file: File, name: string): Observable<HttpEvent<{}>> {
        this.fileName = name;
        const formdata: FormData = new FormData();
        formdata.append('file', file);
        const req = new HttpRequest('POST', 'api/upload', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    }

    hellwigMethod() {
        return this.http.get('api/hellwig');
    }

    mnkWithHellwig() {
        //const params = new HttpParams().set('newModelName', name);
        return this.http.get('api/mnkWithHellwig');
    }
    newMNK(){
        return this.http.get('api/newMNK');
    }
    getMNK(){
        return this.http.get('api/getMNK');
    }
    getHeaders(){
        return this.http.get('api/getHeaders');
    }
    predict(param:[number]) {
        JSON.stringify(param)
        const params = new HttpParams().set('userParams', JSON.stringify(param))
        return this.http.get('api/predict',{params});
    }
}