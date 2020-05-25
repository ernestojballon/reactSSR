import React , {useState,useEffect} from 'react';
import Header from './Header/Header'
import ContestPreview from './ContestPreview/ContestPreview';
import data from '../data/testData.js'
import './App.scss'

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
  },[])
  const contests = data.contests.map((contest)=>{
    return  <li key={contest.id}>
                  <ContestPreview contest={contest}/>
                  <br/>
              </li>
  })
  return (
    <div className='container'>
      <Header/>
      <br/>
      <ol>
        {contests}
      </ol>
      <br/>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
export default App;
