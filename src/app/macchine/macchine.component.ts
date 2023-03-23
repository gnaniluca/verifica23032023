import { Component, Input } from '@angular/core';
import { Macchine } from './macchine.module';
@Component({
  selector: 'app-macchine',
  templateUrl: './macchine.component.html',
  styleUrls: ['./macchine.component.css']
})
export class MacchineComponent {
  @Input() macchina:Macchine;
  
  ngOnInit() {}

}
