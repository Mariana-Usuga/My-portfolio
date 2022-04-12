/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import IveBuilt from './IveBuilt';

const Projects = () => (
  <div
    className="text-light center-aboutMe div-main margin-top-aboutMe"
    id="Work"
  >
    <div>
      <h5 className="fs-2 title-thing">
        Some Things I&apos;ve Built
      </h5>
    </div>
    <IveBuilt
      title="Maket Pul"
      tecnologies={['React', 'Sass', 'NodeJS', 'MongoDB']}
      deployment="https://marktpulf.netlify.app/"
      repository="https://github.com/Mariana-Usuga/MarktPul-F"
    >
      Worked on MarktPul, a web application where anyone can register,
      browse and search through the second-hand product offering that were
      previously uploaded by other sellers . The buyer adds the products to
      a shopping cart and finally pays and receives home delivery
    </IveBuilt>
    <IveBuilt
      title="U Dance"
      tecnologies={['React', 'TailWind', 'NodeJS', 'MongoDB']}
      deployment="https://u-dance.netlify.app/"
      repository="https://github.com/Mariana-Usuga/U-Dance-F"
    >
      Wrote a web application for management of group classes for any kind of school,
      initially developed for dance schools. The app has two profiles: a director&apos;s role,
      which can have a profile to create and manage dance courses, and a student&apos;s role,
      to select courses and pay them.
    </IveBuilt>
  </div>
);

export default Projects;
