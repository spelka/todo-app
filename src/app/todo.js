//Function: addItem()
//Purpose: Get user input from text box and add it to the list of to-do items
function addItem()
{
    //set up the elements and get the data from the text box
    var li_new_todo = document.createElement("li");
    var inputValue = document.getElementById("input_todo_item").value;
    var text_new_todo = document.createTextNode(inputValue);
    li_new_todo.appendChild(text_new_todo);

    //input validation
    if (inputValue === '')
    {
      alert("Error: Cannot add an empty To-Do Task");
    }
    else
    {
      document.getElementById("ul_todo_list").appendChild(li_new_todo);
    }
}