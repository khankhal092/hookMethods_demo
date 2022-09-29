import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hookMethods';

  value = ''
  sumiteVal(val: any) {
    this.value = val.value
  }

  destroy: boolean = false
  destroyButton() {
    this.destroy = !this.destroy
  }
}
