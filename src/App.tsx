import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import pages from 'src/pages';
import Home from 'components/Home';
import ComponentEmotionRed from 'components/Red';
import ComponentEmotionGreen from 'components/Green';
import ComponentEmotionBlue from 'components/Blue';

const title = 'emotion 動作確認';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>

    <header className="App-header">
      <h1>{title}</h1>
    </header>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={pages.red.path} exact component={ComponentEmotionRed} />
      <Route path={pages.green.path} exact component={ComponentEmotionGreen} />
      <Route path={pages.blue.path} exact component={ComponentEmotionBlue} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
