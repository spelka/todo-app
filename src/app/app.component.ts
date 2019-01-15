import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoArray=[];

  addTodo(value)
  {
    this.todoArray.push(value);
    console.log("Add Item: " + this.todoArray);
  }

  deleteTodo(todo)
  {
    console.log("Delete Item: " + todo); 
    for (let i=0; i<= this.todoArray.length; i++)
    {
      if (todo = this.todoArray[i])
      {
        this.todoArray.splice(i,1);
      }
    }
  }

  // enable submitting the form with the enter key
  todoSubmit(value:any)
  {
    if(value!=="")
    {
      this.todoArray.push(value.todo)
      //this.todoForm.reset()
    }
    else
    {
      alert('Field required **')
    }
  
  }

}

