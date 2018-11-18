import { HTTP } from "@ionic-native/http";
import { Injectable } from "@angular/core";
import { LatLng } from "@ionic-native/google-maps";
import styles from "./styles";

@Injectable()
export class MapApiProvider {
  private url: string = "https://maps.googleapis.com/maps/api";
  private apiKey: string = "AIzaSyCrLo2r2ajGYL_47KIlJJR2OxRlp-bVc0s";

  constructor(private http: HTTP) {}

  get(endpoint: string, parameters?: any, headers?: any) {
    if (!parameters) {
      parameters = {};
    }

    if (!headers) {
      headers = {};
    }
    // add api key
    parameters.key = this.apiKey;

    return this.http.get(this.url + "/" + endpoint, parameters, headers);
  }

  getNearBy(latLng: LatLng, radius: string) {
    let parameters = {
      location: latLng.toUrlValue(),
      radius
    };
    let endpoint = "place/nearbysearch/json";
    return this.get(endpoint, parameters);
  }

  getStyle() {
    return styles;
  }
}
