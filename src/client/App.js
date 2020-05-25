import React , {useState,useEffect} from 'react';
import Header from './components/Header/Header'
import ContestPreview from './components/ContestPreview/ContestPreview';
import './App.scss'

const App = () => {
  const [contests, setContest] = useState([]);
  useEffect(()=>{
  
  },[])
  const _contests = contests.map((contest)=>{
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
        {_contests}
      </ol>
      <br/>
    </div>
  );
}
export default App;
