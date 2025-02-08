// Components

import { TextAreaGroup } from '@/main/_components/molecules/TextAreaGroup';
import { InputGroup } from '@/main/_components/molecules/InputGroup';
import { FormGroup } from '@/main/_components/molecules/FormGroup';
import { Button } from '@/main/_components/atoms/Button';

export default function ContactUs() {
  return (
    <>
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
    </>
  );
}
