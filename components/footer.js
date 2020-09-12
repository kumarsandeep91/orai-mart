import Link from "next/link";
import FooterStyles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={FooterStyles.FooterSection}>
      <div className={FooterStyles.Row}>
        <div className={FooterStyles.Col}>
          <img src="/images/Logo.svg" alt="Logo" />
          <ul>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>Help Center</a>
              </Link>
            </li>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>English (International)</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={FooterStyles.Col}>
          <h1>About Us</h1>
          <ul>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>My Account</a>
              </Link>
            </li>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>Categories</a>
              </Link>
            </li>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>Cities</a>
              </Link>
            </li>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>Become a Partner</a>
              </Link>
            </li>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>Careers</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={FooterStyles.Col}>
          <h1>Questions ?</h1>
          <ul>
            <li>
              <Link className={FooterStyles.FooterLinks} href="#">
                <a>Frequently Asked Questions</a>
              </Link>
            </li>
            <li>
              <Link className={FooterStyles.FooterLinks} href="contact-us">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={FooterStyles.graveYardLinks}>
        <p>© 2020 Appening Infotech Pvt Ltd</p>
        <div className={FooterStyles.centerLinkBox}>
          <Link href="#" className={FooterStyles.centerLink}>
            <a>Privacy</a>
          </Link>
          <Link href="#" className={FooterStyles.centerLink}>
            <a>Accesbility</a>
          </Link>
          <Link href="#" className={FooterStyles.centerLink}>
            <a>Terms</a>
          </Link>
        </div>
        <div className={FooterStyles.icons}>
          <a
            target="_blank"
            aria-label="Instagram"
            rel="noopener"
            href=""
            className={FooterStyles.link}
          >
            <i
              className={`${FooterStyles.instagram} fab fa-instagram fa-lg`}
            ></i>
          </a>
          <a
            target="_blank"
            aria-label="Facebook"
            rel="noopener"
            href=""
            className={FooterStyles.link}
          >
            <i
              className={`${FooterStyles.facebook} fab fa-facebook-square fa-lg`}
            ></i>
          </a>
          <a
            target="_blank"
            aria-label="Twitter"
            rel="noopener"
            href=""
            className={FooterStyles.link}
          >
            <i className={`fab fa-twitter fa-lg ${FooterStyles.twitter}`}></i>
          </a>
          <a
            target="_blank"
            aria-label="Youtube"
            rel="noopener"
            href=""
            className={FooterStyles.link}
          >
            <i className={`${FooterStyles.youtube} fab fa-youtube fa-lg`}></i>
          </a>
        </div>
      </div>
    </div>
  );
}
