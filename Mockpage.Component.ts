import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './MockPage.component.html',
  styleUrls: ['./Mockpage.component.scss']
})
export class ContentComponent {
  searchQuery: string = ''; //
  categories = ['Books', 'Clothing', 'Sports', 'Home & Kitchen','Vegetables','Electronics'];

  items = [
    { 
      name: 'Laptop', 
      description: 'Gaming laptop', 
      display_img_url: 'https:///', // Taken from URL
      quantity: 3, 
      low_quantity: 5
    },
    { 
      name: 'Smartphone', 
      description: 'Nothing 2a', 
      display_img_url: 'https:///', // Taken from URL
      quantity: 0, 
      low_quantity: 5
    },
    { 
      name: 'T-Shirt', 
      description: 'V-Shaped', 
      display_img_url: 'https:///', // Taken from URL
      quantity: 10, 
      low_quantity: 5
    },
    { 
      name: 'Sofa', 
      description: 'Stylish for Living room', 
      display_img_url: '', // Empty image URL, it uses placeholder
      quantity: 2, 
      low_quantity: 5
    },
    { 
      name: 'Headphones', 
      description: 'Base Headphones', 
      display_img_url: 'https:///',  // Taken from URL
      quantity: 6, 
      low_quantity: 5
    }
  ];

  sortedItems = [...this.items];

  sortItems() {
    this.sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  }
  sortItemsrev() {
    this.sortedItems.sort((a, b) => b.name.localeCompare(a.name));
  }
}
