interface Location {
  lat: number;
  lng: number;
  name: string;
}

interface WorkingTime {
  start: string;
  end: string;
}

export interface Merchant {
  key: number;
  name: string;
  styles: string[];
  specials: string[];
  rate: number;
  approximateDeliveryTime: number;
  averageOrderPerMonth: number;
  distance: number;
  logoLink: string;
  isHalal: boolean;
  isPorkFree: boolean;
  startPrice: number;
}

export interface MerchantDetail {
  profileImageLink: string;
  location: Location;
  contactNumber: string;
  workingTime: WorkingTime;
  isWorking: boolean;
  // promotion: string;
}
