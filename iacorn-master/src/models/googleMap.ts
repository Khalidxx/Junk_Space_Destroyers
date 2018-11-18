interface Location {
  lat: number;
  lng: number;
}

interface Northeast {
  lat: number;
  lng: number;
}

interface Southwest {
  lat: number;
  lng: number;
}

interface Viewport {
  northeast: Northeast;
  southwest: Southwest;
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

export interface Nearby {
  geometry: Geometry;
  icon: string;
  id: string;
  name: string;
  photos: Photo[];
  place_id: string;
  reference: string;
  scope: string;
  types: string[];
  vicinity: string;
}
