import React from 'react'
import WrapperLayout from '../components/WrapperLayout'

export default function Contact() {
  return (
    <WrapperLayout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Enamel pin whatever gentrify tofu DIY wayfarers. Trust fund fashion axe knausgaard franzen meditation kinfolk enamel pin sustainable pour-over aesthetic air plant before they sold out. Synth williamsburg enamel pin banh mi. Street art umami pop-up, adaptogen 8-bit chia prism kombucha seitan. Deep v jianbing cardigan master cleanse tote bag celiac twee.
            </p>
            <p>
            Dummy text? More like dummy thicc text, amirite?
            </p>
            <p>
            Aesthetic tumblr everyday carry scenester disrupt freegan tbh helvetica cloud bread. Stumptown beard scenester roof party neutra keffiyeh, edison bulb banh mi lo-fi austin asymmetrical iPhone. Taxidermy synth man braid tofu. Franzen 8-bit crucifix iPhone aesthetic trust fund normcore cliche raclette cred green juice wolf meggings artisan.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">Submit</button>
            </form>
          </article>
        </section>
      </main>
    </WrapperLayout>
  )
}

// import React, { Component } from 'react'

// export default class Contact extends Component {
//   render() {
//     return (
//       <div>
//         Class Component Contact Page
//       </div>
//     )
//   }
// }
