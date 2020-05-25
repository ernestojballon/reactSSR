import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
import ContestService from './client/services/http/Contests.service'


const contestService = new ContestService()
contestService.getAll().then(
    (data)=>{
      ReactDOM.hydrate(
        <App initialData={data.contests}/>,
       document.getElementById('mountNode'),
     );
    }
  ).catch()




