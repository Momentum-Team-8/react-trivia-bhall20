import React, { useState, useEffect } from 'react'
import './App.css'
import { getCategoryList } from './api'
import { Header } from './components/Header'
import { CategoryList } from './components/CategoryList'
import { CategoryData } from './components/CategoryData'
import { Questions } from './components/Questions'

function App () {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  useEffect(() => {
    getCategoryList().then((categories) => setCategories(categories))
  }, [])
  return (
    <div className='main'>
      {selectedCategory
        ? <CategoryData selectedCategory={selectedCategory} />
        : (
          <CategoryList
            categories={categories}
            setSelectedCategory={setSelectedCategory}
          />
          )}
    </div>
  )
}

export default App
