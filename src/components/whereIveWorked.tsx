/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LayoutWorkPlace from './layoutWorkPlace';
import WorkPlace from './workPlace';

const WhereIveWorked = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayoutWorkPlace />}>
        <Route
          path="/sofka"
          element={(
            <WorkPlace
              id={3}
              title="Sofka"
              items={[
                'Worked effectively in teams using the SCRUM methodology',
                'Provided clean and efficient code using GIT to store their code',
                'Elaborated  multiple visual elements by translating UI/UX design wireframes into code. Images were uploaded to Cloudinary',
              ]}
            />
)}
        />

        <Route
          path="/it"
          element={(
            <WorkPlace
              id={2}
              title="It Team Corp"
              items={[
                'Worked effectively in teams using the SCRUM methodology',
                'Provided clean and efficient code using GIT to store their code',
                'Elaborated  multiple visual elements by translating UI/UX design wireframes into code. Images were uploaded to Cloudinary',
              ]}
            />
)}
        />

        <Route
          path="/mtr"
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

    </Routes>
  </BrowserRouter>
);

export default WhereIveWorked;
