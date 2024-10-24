import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ RouterModule]
})

export class AppComponent {
  title = 'homes';
}
