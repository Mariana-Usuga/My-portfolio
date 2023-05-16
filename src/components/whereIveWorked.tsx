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
          path="/"
          element={(
            <WorkPlace
              id={3}
              title="Sofka"
              items={[
                `Collaborated in designing and executing a clothing eCommerce platform, enabling users to search
                and purchase clothes online using NestJs and MongoDB`,
                `Established a Domain-Driven Design architecture to maintain distinct layers within the system
                and enhance code quality.`,
              ]}
            />
)}
        />

        <Route
          path="/2"
          element={(
            <WorkPlace
              id={2}
              title="It Team Corp"
              items={[
                `Crafted a static web application to organize commercial proposals and document completed
                projects, utilizing Angular, Java (for REST API), and PostgreSQL.`,
                `Designed a web user interface and AWS Lambda functions in JavaScript to access and store data
                in DynamoDB, manage files in S3, and present results intuitively.`,
              ]}
            />
)}
        />

        <Route
          path="/1"
          element={(
            <WorkPlace
              id={1}
              title="Make It Real"
              items={[
                `Contributed to MarktPul development, a web platform for buying and selling second-hand
                products, employing Redux, Tailwind CSS, Cypress, NodeJs, Express, MongoDB, JWT, Epayco,
                and Bcrypt.`,
                `Created a web application for dance school process management with distinct director and student
                profiles, facilitating course creation, enrollment, and payment.`,
              ]}
            />
)}
        />

      </Route>

    </Routes>
  </BrowserRouter>
);

export default WhereIveWorked;
