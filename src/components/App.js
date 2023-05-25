import React from 'react';
import { Switch, withRouter } from 'react-router-dom';
import '../index.css';
import Main from './Main';

import {
  data,
  electricTools,
} from '../utils/backend';

function App() {
  return (
    <main className="body">
      <Switch>
        <Main
          electricTools={electricTools}
          data={data}
        />
      </Switch>
    </main>
  );
}

export default withRouter(App);
