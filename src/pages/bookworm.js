import React from "react"
import MainTemplate from '../containers/T01-Template-Main/T01-Template-Main';
import navigation from '../data/navigation';
import '../styles/base.scss';

import Bookworm from '../assets/images/bookworm.jpg';

const background = {
  media: Bookworm,
  type: 'image'
}

const IndexPage = () => (
  <MainTemplate background={ background } navigation={ navigation }>
    <section className="section">
      <div className="section__wrapper">
        [Bookworm]
      </div>
    </section>
  </MainTemplate>
)

export default IndexPage
