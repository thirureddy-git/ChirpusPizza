import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chirpus Pizza!';
Menu:MenuItem[] = [
    {pizzaname:"Veggie Lovers", type:"Pizza", price:12.99},
    {pizzaname:"Chicken Supreme", type:"Pizza", price:14.99},
    {pizzaname:"Pepperoni ", type:"Pizza", price:14.99},
    {pizzaname:"Veggie Delight", type:"Pizza", price:14.99},
    {pizzaname:"Lava Cake", type:"Desert", price:4.99},
    {pizzaname:"Double Cheese", type:"Pizza", price:11.99},
    {pizzaname:"Cheese Sticks", type:"Sides", price:5.99}
 ]
}
