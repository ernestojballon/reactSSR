import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import getConfig from './config'
import App from '../client/App';
import getApi from './api';
import ContestService from '../client/services/http/Contests.service'


const server = express();
server.use(express.static('public'));

server.get('/', (req, res) => {
  const contestService = new ContestService()
  contestService.getAll().then(
    (data)=>{
      
      const initialMarkup = ReactDOMServer.renderToString(<App initialData={data.contests}  />);
      res.send(`
            <html>
              <head>
                <title>This is Sample React App</title>
                <link rel="stylesheet" href="main.css">
              </head>
              <body>
                <div id="mountNode">${initialMarkup}</div>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                <script src="/main.js"></script>
              </body>
            </html>
          `);
    }
  ).catch()
  
});
server.use('/api',getApi())

server.listen(getConfig, () => console.log('Server is running...'));