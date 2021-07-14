import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { CategoryList } from './components/CategoryList';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php")
      .then((res) => setCategories(res.data.trivia_categories));
  }, []);

  return (
    <CategoryList categories={ categories } />
  )
}
export default App;
