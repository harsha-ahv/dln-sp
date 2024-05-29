import React from 'react'
import "./DirMsg.css"
import pic from "../assets/imgs/Picture1.jpg"

function DirMsg() {
  return (
    <>
  <div className="awesome" >
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>From the Director's Desk</title>
    <link rel="stylesheet" href="styles.css" />
    {/* Link to FontAwesome for the pencil icon (optional) */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <header />
    <main>
      <section className="director-message">
        <img
          src={pic}
          alt="Director"
          className="director-image"
        />
        <div className="message-content">
          <h1>Executive's Greeting</h1>
          <h2>
            <i className="fas fa-pencil-alt" /> Mr.Dharavanth Naresh{" "}
          </h2>
          <p>
            I am excited to introduce "DLN Space Healthcare". Our company is
            driven by my extensive expertise over a decade in biomedical
            engineering and our mission to enhance healthcare standards. It is
            an authorized importer Certified from" Directorate General of
            Foreign Trade Government of India", ensuring compliance with all
            regulations and standards.
          </p>
          <p>
            At DLN Space Healthcare, we specialize in offering a diverse range
            of medical equipment. Our equipment, sourced from France, Germany,
            and Japan, meets the highest quality standards despite being
            preowned. This ensures that our customers receive top-notch
            equipment that is reliable and efficient.{" "}
          </p>
          <p>
            Our dedicated team of experts ensures that each piece of equipment
            is meticulously sanitized, maintained, and prepared for immediate
            use. DLN Space Healthcare is not merely a business; it represents a
            commitment to making healthcare accessible, affordable, and
            efficient.
          </p>
          <p>
            We aim to be a trusted partner in our customers' journey to improved
            health, offering not only equipment but also support and reliable
            information. I extend my heartfelt gratitude to my loved ones,
            employees, and well-wishers whose contributions have played a
            pivotal role in realizing my dream and the growth of our
            organization.
          </p>
        </div>
      </section>
    </main>
  </div>
</>

  )
}

export default DirMsg