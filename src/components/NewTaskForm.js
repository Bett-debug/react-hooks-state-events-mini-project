import React,{useState} from "react";

function NewTaskForm({ categories=[],onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories?.[0]||"Uncategorized");

  function handleSubmit(event) {
    event.preventDefault();
    const newTask={
      text: text,
      category: category
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[0]||"Uncategorized");
  }


  const categoryOptions = categories
  .filter((cat) => cat !== "All" && cat !== "Uncategorized")
  .map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  )); 
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task details"
        />
      </label>
      <label>
        Category
        <select name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
          {/* render <option> elements for each category here */}
          <option value="Uncategorized">Uncategorized</option>
          {categoryOptions}
          <option value="All">All</option>


          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
