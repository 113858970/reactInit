import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Profile from './containers/profile';
import Course from './containers/course';
import Doc from './components';

const courseRouter = [
  <Route key="1" path="" component={Home} />,
  <Route key="2" path="comments" component={Profile} />,
  <Route key="3" path="assessment" component={Home}>,
    <Route path="practice" component={Home} />
  </Route>,
];

const examsRouter = [
  <IndexRoute key="1" component={Home} />,
  <Route key="2" path="process" component={Profile} />,
  <Route key="3" path="rank" component={Profile} />,
  <Route key="4" path="history" component={Profile} >
    <Route path=":id" component={Home} />
  </Route>,
];


export default function () {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="profile" component={Profile} />
      <Route path="plans" component={Home} />
      <Route path="electives" component={Home} />
      <Route path="series/:id" component={Home} />
      <Route path="courses/:id" component={Course}>{courseRouter}</Route>
      <Route path="series/:id/courses/:id" component={Course}>{courseRouter}</Route>
      <Route path="exams/:id" component={Home} >{examsRouter}</Route>
      <Route path="docs" component={Doc}>
        {/* <Route path="/carousel" component={CarouselExample} /> */}
      </Route>
    </Route>
  );
}
