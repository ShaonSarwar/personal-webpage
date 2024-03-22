import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <h3>Address</h3>
      <p>Narayanganj, Bangladesh</p><br/>
      <h3>Contact Info</h3>
      <p><strong>Email:</strong>&nbsp; at2018lantis@gmail.com</p>
      <p><strong>Phone:</strong>&nbsp; +8801405816758</p><br/>
      <div style={{display:"flex"}}>
        <a style={{marginTop:20}} href={`tel:${contact.phone}`}>
          <span type='button' className='btn btn--outline'>
            Call me
          </span>
        </a>
        <a style={{marginTop:20}} href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
      </div>
    </section>
  )
}

export default Contact
