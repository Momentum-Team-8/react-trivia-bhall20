import React, { useEffect, useState } from 'react'
import { getCategoryData } from '../api'

export const CategoryData = (props) => {
    const [CategoryData, setCategoryData] = useState({})
    const [loading, setLoading] = useState(true)
    cosnt { selectedCategory } = props
    const refreshpage = () => {
        window.location.reload()
    }

    useEffect(() => {
        getCategoryData(selectedCategory).then(data => {
            console.log(data)
            setCategoryData(data)
            setLoading(false)
        })
    }, [selectedCategory])

    return loading
    ? 'Category data is loading'
    : (
    <>
        <div className='header'>
            <p> className='title'>{selectedCategory.name}</p>
            <button onClick={refreshPage}>Back to Category List</button>
            </div>
            <div className='div'>
          {categoryData.map((data) => {
            return (
              <div key={data.question}>
                <p><strong>{data.question}</strong></p>
                <p>{data.correct_answer}</p>
                <p className='incorrect-answers'> {data.incorrect_answers[0]}</p>
                {data.incorrect_answers &&
                  <p className='incorrect-answers'> {data.incorrect_answers[1]}</p>
                }
                {data.incorrect_answers &&
                  <p className='incorrect-answers'> {data.incorrect_answers[2]}</p>
                }
              </div>
            )
          })}
        </div>
      </>
      )
}
