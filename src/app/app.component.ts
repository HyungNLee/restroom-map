import { Component } from '@angular/core';
import { } from '@types/googlemaps';
import { Place, Coordinate } from './models/place.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ngOnInit() {
      let mapProp = {
          center: new google.maps.LatLng(47.663357, -122.298217),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
      let williamSonoma = new Place("William Sonoma", "4619 26th Ave NE, Seattle, WA 98105", "Example", false);
      let coordinatePromise = williamSonoma.getCoordinate();
      coordinatePromise.then((coordinate: Coordinate) => {
        williamSonoma.coordinate = coordinate;
        let marker = williamSonoma.setMarker(map);
      });

  }
}
