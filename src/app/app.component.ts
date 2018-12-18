import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
      <label>Marvellous Infosystems</label>
      <br>
      <input type="text" name="name1" id="id1">
  </div>              
  `,
  styles: [ `label{
    color:blue}`
  ]
})
export class AppComponent {
  title = 'Ass5Q3';
}
