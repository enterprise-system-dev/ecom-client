import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-context',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './context.component.html',
  styleUrl: './context.component.scss'
})
export class ContextComponent {

}
