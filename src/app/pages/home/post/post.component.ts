import {Component, Input} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  @Input() username: string | undefined;
  items: MenuItem[] | undefined;

}
