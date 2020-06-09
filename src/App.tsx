import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Redirect, Route, Switch } from 'react-router';

import pages from 'src/pages';
import Home from 'components/Home';
import Red from 'components/Red';
import ComponentEmotionGreen from 'components/Green';
import ComponentEmotionBlue from 'components/Blue';

const title = 'emotion 動作確認';

const App: FC = () => (
  <>
    <Helmet htmlAttributes={{ lang: 'ja' }}>
      <title>{title}</title>
    </Helmet>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path={pages.red.path} exact component={Red} />
      <Route path={pages.green.path} exact component={ComponentEmotionGreen} />
      <Route path={pages.blue.path} exact component={ComponentEmotionBlue} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
