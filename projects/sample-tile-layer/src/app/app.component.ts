import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<azure-map [center]="[-99.47, 40.75]" zoom="4">' +
    '<tile-layer tileUrl="https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/{z}/{x}/{y}.png">' +
    '</tile-layer>' +
    '</azure-map>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public added(e: any): void {
    console.log(e);
  }
}
