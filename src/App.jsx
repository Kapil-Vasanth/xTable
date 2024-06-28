import { useState } from 'react'


const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];



function App() {
  const [articles, setArticles] = useState(data)
  
  function sortArticle(type){
    if(type == 'date'){
        setArticles(prev => {
          const sortArray = prev.sort((a,b) => {
            if(new Date(a.date).getTime() == new Date(b.date).getTime()){
              return b.views - a.views
            }
            return (new Date(b.date).getTime() - new Date(a.date).getTime())
          })
          return Array.from(sortArray)
        })
      }
    
    else {
      setArticles(prev => {
        const sortArray = prev.sort((a,b) => {
          
          return b.views - a.views
        })
        return Array.from(sortArray)
      })
    }
  }

    

  return (
    <>
      
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={() => sortArticle('date')}>Sort by Date</button>
        <button onClick={() => sortArticle('views')}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </thead>
        <tbody>
          {articles.map(article => {
            
            return (
              <tr>
                <td>{article.date}</td>
                <td>{article.views}</td>
                <td>{article.article}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
