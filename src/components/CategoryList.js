import React from 'react'

export const CategoryList = (props) => {
  const { categories, setSelectedCategory } = props
  return (
    <main className='main'>
      <h1 className='title'>Welcome To Trill Trivia!</h1>
      <h1 className='title'>Select a Category Below</h1>
      <div className='container'>
        {categories.map(category => {
          return (
            <div key={category.id} className='box'>
              <button className='button is-info is-focused' onClick={() => setSelectedCategory(category)}>{category.name}</button>
            </div>
          )
        })}
      </div>
    </main>
  )
}
