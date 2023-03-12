import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2023/01/Quiche-Recipe-7.jpg?resize=1024%2C1536&ssl=1'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://i0.wp.com/www.livewellbakeoften.com/wp-content/uploads/2023/01/Quiche-Recipe-7.jpg?resize=1024%2C1536&ssl=1')

  ];

  constructor(){

  }

  ngOnInit(){

  }
}
