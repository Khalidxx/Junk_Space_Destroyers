import { HttpClient, HttpParams } from "@angular/common/http";
import { LatLng } from "@ionic-native/google-maps";

export class MapApiProvider {
  url: string = "https://maps.googleapis.com/maps/api";
  apiKey: string = "AIzaSyCrLo2r2ajGYL_47KIlJJR2OxRlp-bVc0s";

  constructor(public http: HttpClient) {}

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      reqOpts.params.set("key", this.apiKey);
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + "/" + endpoint, reqOpts);
  }

  getNearBy(lagLng: LatLng, radius: string) {
    let params: HttpParams = new HttpParams();
    params.set("location", lagLng.toUrlValue());
    params.set("radius", radius);
    return this.get("place/nearbysearch/json", params)["results"];
  }
}
