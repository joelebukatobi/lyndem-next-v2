// Components

import { TextAreaGroup } from '@/main/_components/molecules/TextAreaGroup';
import { InputGroup } from '@/main/_components/molecules/InputGroup';
import { FormGroup } from '@/main/_components/molecules/FormGroup';
import { Button } from '@/main/_components/atoms/Button';
import { Header } from '@/main/_components/organisms/Header';

export default function ContactUs() {
  return (
    <div className="contact">
      <Header>
        <div className="contact-header">
          <div className="container contact-header-main">
            <div className="caption">
              <div>
                <p>Contact Us</p>
                <hr />
              </div>
              <h3>{`We'd love to hear from you`}</h3>
              <p>
                {`Have questions, feedback, or ideas to share? Or perhaps you're interested in purchasing one of our
              educational games? Reach out to us! Whether you're curious about our services, looking to partner with us,
              or simply want to learn more, we're here to connect and collaborate. Let’s make learning fun, together!`}
              </p>
            </div>
          </div>
        </div>
      </Header>
      <div className="container">
        <form className="contact-form" action="">
          <FormGroup>
            <InputGroup label="First Name" type="text" id="firstname" name="firstname" placeholder="First Name" />
            <InputGroup label="Last Name" type="text" id="lastname" name="lastname" placeholder="Last Name" />
          </FormGroup>

          <FormGroup>
            <InputGroup label="Phone" type="tel" id="phone" name="phone" placeholder="Phone Number" />
            <InputGroup label="Email" type="email" id="email" name="email" placeholder="Email Address" />
          </FormGroup>

          <FormGroup>
            <InputGroup label="Subject" type="text" id="subject" name="subject" placeholder="Subject" />
          </FormGroup>

          <FormGroup>
            <TextAreaGroup label="Message" id="message" name="message" placeholder="Your message" rows="10" />
          </FormGroup>
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
}
