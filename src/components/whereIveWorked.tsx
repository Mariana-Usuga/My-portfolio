/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWorkPlace from './layoutWorkPlace';
import WorkPlace from './workPlace';

const WhereIveWorked = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutWorkPlace title="Make It Real" from="August 2021" to="Feb 2022" />}>
        <Route
          path="/"
          element={(
            <WorkPlace
              id={1}
              title="Make It Real"
              items={[
                'Worked effectively in teams using the SCRUM methodology',
                'Provided clean and efficient code using GIT to store their code',
                'Elaborated  multiple visual elements by translating UI/UX design wireframes into code. Images were uploaded to Cloudinary',
              ]}
            />
)}
        />
      </Route>

      <Route path="/" element={<LayoutWorkPlace title="It Team Corp" from="August 2021" to="Feb 2022" />}>
        <Route
          path="/"
          element={(
            <WorkPlace
              id={1}
              title="It Team Corp"
              items={[
                'Worked effectively in teams using the SCRUM methodology',
              ]}
            />
)}
        />
      </Route>

    </Routes>
  </BrowserRouter>
);

export default WhereIveWorked;
