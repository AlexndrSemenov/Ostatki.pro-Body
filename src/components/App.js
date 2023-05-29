import React from 'react';
import { useState } from 'react';
import { Route, Switch, withRouter, useHistory } from 'react-router-dom';
import '../index.css';
import Main from './Main';
import AddCard from './AddCard';
import api from '../utils/Api';
import { data } from '../utils/data';

function App() {
  
  const history = useHistory();
  let [tools, setTools] = useState([]);
  
  // получаем карточки товаров при загрузке страницы
  React.useEffect(() => {
    api.getInitialTools()
      .then((toolData) => {
        setTools(toolData);
      })
      .catch((err) => console.log(err));
  }, []);

  // добавляем карточку
  function handleAddToolSubmit(place) {
    api.createTool(place)
      .then(newPlace => {
        setTools([newPlace, ...tools]);
        history.push("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <main className="body">
      <Switch>

        <Route exact path="/">
          <Main
            //electricTools={electricTools}
            electricTools={tools}
            data={data}
          />
        </Route>
        
        <Route path="/addCard">
          <AddCard handleAddToolSubmit={handleAddToolSubmit} />
        </Route>

      </Switch>
    </main>
  );
}

export default withRouter(App);
