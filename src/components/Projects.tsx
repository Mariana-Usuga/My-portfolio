/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import IveBuilt from './IveBuilt';

const Projects = () => (
  <div
    className="text-light center-aboutMe div-main margin-top-aboutMe"
  >
    <div>
      <h3 className="fs-2 mb-4">Some Things I&apos;ve Built</h3>
    </div>
    <IveBuilt
      title="Maket Pul"
      tecnologies={['React', 'Node']}
    >
      Building a custom multisite compatible WordPress plugin to build global
      search with Algolia
    </IveBuilt>
    <IveBuilt
      title="U Dance"
      tecnologies={['React', 'Node']}
    >
      Building a custom multisite compatible WordPress plugin to build global
      search with Algolia
    </IveBuilt>
  </div>
);

export default Projects;
