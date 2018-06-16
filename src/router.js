import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/es';
import PostsIndex from './components/Posts/posts_index';
import PostsShow from './components/Posts/posts_show';
import PostsNew from './components/Posts/posts_new';
import Sample from './components/Sample';

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
        <Route path="/posts/new" component={PostsNew} />
        <Route path="/posts/:id" component={PostsShow} />

        <Route path="/Sample" component={Sample} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
