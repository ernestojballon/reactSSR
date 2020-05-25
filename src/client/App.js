import React , {useState,useEffect} from 'react';
import propTypes from 'prop-types'
import Header from './components/Header/Header'
import ContestPreview from './components/ContestPreview/ContestPreview';
import './App.scss'
import ContestsService from './services/http/Contests.service';

const App = ({initialData}) => {
  const [contests, setContest] = useState(initialData);
  const contestService = new ContestsService()
  
  useEffect(()=>{
    contestService.getAll().then((data)=>{
      setContest(data.contests)
    }).catch()
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
App.propTypes={
  initialData:propTypes.array.isRequired
}
export default App;
