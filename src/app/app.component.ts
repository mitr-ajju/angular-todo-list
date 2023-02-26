import { Component } from '@angular/core';
import { ListItem } from './list-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'My Shopping List';
  listItems : ListItem[] = [];
  newItem : string;


  addItem(){
    if(this.newItem){
      let newItemForTodo = new ListItem();
      newItemForTodo.itemName = this.newItem;
      newItemForTodo.isCompleted = false;
      this.listItems.push(newItemForTodo)
      this.newItem = "";
    }
    else{
      alert('Please enter an item name');
    }
  }

  itemCompleted(lineNumber:number){
    this.listItems[lineNumber].isCompleted = !this.listItems[lineNumber].isCompleted;
  }

  removeItem(lineNumber:number){
    this.listItems = this.listItems.filter((v, i) => i!= lineNumber);
  }
  
}