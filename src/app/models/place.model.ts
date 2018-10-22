import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { } from '@types/googlemaps';

export class Place {
  public coordinate: Coordinate = new Coordinate(0, 0);
  constructor(public name: string, public address: string, public openingHours: string, public password: boolean) {
  }

  getCoordinate() {
    return new Promise((resolve, reject) => {
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': this.address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          resolve(new Coordinate(results[0].geometry.location.lat(), results[0].geometry.location.lng()));
        }
        else {
          reject(new Error("Geocode fail: "+status));
        }
      });
    })
  }

  setMarker(map: google.maps.Map) {
    let marker = new google.maps.Marker({
      position: {lat: this.coordinate.lat, lng: this.coordinate.lng},
      map: map,
      title: this.name
    });
    return marker;
  }
}

export class Coordinate {
  constructor(public lat: number, public lng: number){}
}

class OpeningHours {
  constructor(public open: Date, public close: Date) {}
}