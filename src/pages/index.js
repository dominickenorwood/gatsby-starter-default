import React from "react";
import MainTemplate from '../containers/T01-Template-Main/T01-Template-Main';
import navigation from '../data/navigation';
import '../styles/base.scss';

import Madvillian from '../assets/images/madvillan.jpg';

const background = {
  media: Madvillian,
  type: 'image'
}

const IndexPage = () => (
  <MainTemplate background={ background } navigation={ navigation }>
    <section className="section">
      <div className="section__wrapper">
        <h1>Fonts</h1>
        <h2>JetBrains</h2>
        <h3 className="color--grey">Extra Light</h3>
        <div className="font--jetbrains-xtra-light typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Extra Light Italic</h3>
        <div className="font--jetbrains-xtra-light-italic typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Light</h3>
        <div className="font--jetbrains-light typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Light Italic</h3>
        <div className="font--jetbrains-light-italic typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Semi Light</h3>
        <div className="font--jetbrains-semi-light typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Semi Light Italic</h3>
        <div className="font--jetbrains-semi-light-italic typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Regular</h3>
        <div className="font--jetbrains-regular typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Regular Italic</h3>
        <div className="font--jetbrains-regular-italic typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Medium</h3>
        <div className="font--jetbrains-medium typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Medium Italic</h3>
        <div className="font--jetbrains-medium-italic typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Bold</h3>
        <div className="font--jetbrains-bold typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Bold Italic</h3>
        <div className="font--jetbrains-bold-italic typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Extra Bold</h3>
        <div className="font--jetbrains-xtra-bold typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
        <h3 className="color--grey">Extra Bold Italic</h3>
        <div className="font--jetbrains-xtra-bold-italic typography--regular color--white">Almost before we knew it, we had left the ground. 1234567890</div>
      </div>
    </section>
    {/* <section className="background background--madvillian background--ghost" /> */}
  </MainTemplate>
)

export default IndexPage
