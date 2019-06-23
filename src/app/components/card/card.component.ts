import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  showMovie(item: any) {
    let movieId: number;
    movieId = item.id;
    this.router.navigate(['/movie', movieId]);
  }
}
