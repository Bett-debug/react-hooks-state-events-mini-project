import React from "react";

export const TASKS = [
  {
    text: "Buy rice",
    category: "Food",
  },
  {
    text: "Build a todo app",
    category: "Code",
  },
  
];
function CategoryFilter({categories,selectedCategory,onSelectCategory}) {
  const handleCategoryClick = (category) => {
    onSelectCategory(category);
  };
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories?.map((category) => (
        <button
          key={category}
          className={`category ${selectedCategory === category ? "selected"  : ""}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
      
      {/* Add an "All" category button */}
      
    </div>
  );
}

export default CategoryFilter;
