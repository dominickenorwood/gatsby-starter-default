import React from "react"
import MainTemplate from '../containers/T01-Template-Main/T01-Template-Main';
import navigation from '../data/navigation';
import '../styles/base.scss';

import RipHunter from '../assets/images/rip-hunter.jpg';

const background = {
  media: RipHunter,
  type: 'image'
}

const IndexPage = () => (
  <MainTemplate background={ background } navigation={ navigation }>
    <section className="section">
      <div className="section__wrapper">
        [Time Master]
      </div>
    </section>
  </MainTemplate>
)

export default IndexPage
