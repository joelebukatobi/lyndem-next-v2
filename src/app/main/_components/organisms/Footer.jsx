'use client';

// Next
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Icons
import { DevicePhoneMobileIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

// Images
import LyndemLogoFull from '@/main/_assets/images/lyndem-logo-full.svg';
import LyndemLogoColor from '@/main/_assets/images/lyndem-logo-full-color.svg';
import FacebookIcon from '@/main/_assets/images/facebook-icon.svg';
import InstagramIcon from '@/main/_assets/images/instagram-icon.svg';
import TwitterIcon from '@/main/_assets/images/twitter-icon.svg';

// Components
import { InputGroup } from '@/main/_components/molecules/InputGroup';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="container-fluid footer">
      <div className="container row">
        <div className="footer-logo">{pathname === '/main/home' ? <LyndemLogoFull /> : <LyndemLogoColor />}</div>
        <div className="footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="/main">Home</a>
            </li>
            <li>
              <a href="/main/about-us">About Us</a>
            </li>
            <li>
              <a href="/main/blog">Blog Posts</a>
            </li>
            <li>
              <a href="/main/photo-gallery">Photo Gallery</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h5>Get In Touch</h5>
          <ul>
            <li>
              <a href="/main/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/main/our-services">Our Services</a>
            </li>
          </ul>
        </div>
        <div className="footer-address">
          <h5>Our Address</h5>
          <div>
            <MapPinIcon />
            <address>
              Suite A6, Kabom Court, Plot 104 Gado Nasko Road (2/1) By Phase IV Bridge, Opposite Unity Clinic. Kubwa,
              Abuja
            </address>
          </div>
          <div>
            <DevicePhoneMobileIcon />
            <p>08025182324, 08094931619 </p>
          </div>
        </div>
        <div className="footer-newsletter">
          <h5>Newsletter</h5>
          <form>
            <InputGroup
              name="newsletter"
              type="email"
              placeholder="Enter your email"
              required
              icon={<PaperAirplaneIcon />}
            />
            <p>Your email is safe with us</p>
          </form>

          <h5>Follow Me</h5>
          <ul>
            <li>
              <TwitterIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="container row">
        <p className="footer-copyright">
          &copy; {currentYear} Designed and Developed by
          <strong>
            <a href="https://joelebukatobi.dev"> Joel Onwuanaku</a>
          </strong>
        </p>
      </div>
    </footer>
  );
};
