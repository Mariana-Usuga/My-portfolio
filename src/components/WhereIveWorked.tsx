/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWorkPlace from './LayoutWorkPlace';
import WorkPlace from './WorkPlace';

// const n = [{
//   title: 'Make-It-Real',
//   items: ['This is a wider card with supporting text below as a natural lead-in to
// additional content. This content is a little bit longer',
//     'This is a wider card with supporting text below as a natural lead-into additional
//  content. This content is a little bit longer.'],
//   from: 'August 2021',
//   to: 'Feb 2022',
// },
// {
//   title: 'Otro-Lugar',
//   items: ['mariana mariana mariana mariana mariana marianamariana mariana mariana
// mariana ',
//     'This is a wider card with supporting text below as a natural lead-into additional
// content. This content is a little bit longer.'],
//   from: 'August 2021',
//   to: 'Feb 2022',
// }];

const WhereIveWorked = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutWorkPlace />}>
        <Route
          path="/"
          element={(
            <WorkPlace
              id={1}
              title="Make It Real"
              items={['This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
                'This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.']}
            />
)}
        />
        <Route
          path={`${2}`}
          element={(
            <WorkPlace
              id={2}
              title="Otro-Lugar"
              items={['This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
                'This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.']}
            />
)}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default WhereIveWorked;
