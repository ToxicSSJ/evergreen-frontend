import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Environment} from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {environment} from "@environments";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EvergreenService {

  predio: string = environment.apiUrl + '/api/plots';

  ganancia: string = environment.apiUrl + '/api/profit';

  prediccion: string = environment.apiUrl + '/api/prediction';

  constructor(private _httpClient: HttpClient) {
  }

  getPredio(): Observable<any> {
    return this._httpClient.get(this.predio);
  }

  setPredio(body:any): Observable<any> {
    return this._httpClient.post(this.predio, body);
  }

  getGanancia(): Observable<any> {
    return this._httpClient.get(this.ganancia);
  }

  setGanancia(body:any): Observable<any> {
    return this._httpClient.post(this.ganancia, body);
  }

  actualizarGanancia(body:any): Observable<any>{
    return this._httpClient.put(this.ganancia, body);
  }

  getPrediction(): Observable<any>{
    return this._httpClient.get(this.prediccion);
  }

  setPrediction(body:any): Observable<any>{
    return this._httpClient.post(this.prediccion, body);
  }

  actualizarPrediction(body:any): Observable<any> {
    return this._httpClient.put(this.prediccion, body);
  }
}
