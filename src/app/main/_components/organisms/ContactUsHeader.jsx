'use clinet';

// Next Image
import Image from 'next/image';

// Components
import { Navbar } from '@/main/_components/organisms/Navbar';

export const ContactUsHeader = () => {
  return (
    <div className="container-fluid contact">
      <div className="contact-header">
        <Navbar />
        <div className="container contact-header-main">
          <div className="caption">
            <div>
              <p>Contact Us</p>
              <hr />
            </div>
            <h3>We'd love to hear from you</h3>
            <p>
              Have questions, feedback, or ideas to share? Or perhaps you're interested in purchasing one of our
              educational games? Reach out to us! Whether you're curious about our services, looking to partner with us,
              or simply want to learn more, we're here to connect and collaborate. Let’s make learning fun, together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
