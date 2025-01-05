import Link from 'next/link';

interface OffCanvasProps {
  isOffCanvas: boolean;
  handleOffCanvas: () => void;
}

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: OffCanvasProps) {
  const contactInfo = [
    { label: 'Phone Number', value: '+91 7397572076' },
    { label: 'Email', value: 'nirmalraaj0275@gmail.com' },
    { label: 'Address', value: 'VLB Engineering, 1014/2 3, Arivozhi Nagar Rd, Arivozi Nagar, Kovaipudur, Coimbatore, Tamil Nadu 641042' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/nirmal-raj-r/', icon: 'ri-linkedin-fill' },
    { href: 'https://github.com/nirmalraaj0275', icon: 'ri-github-fill' },
  ];

  return (
    <>
      {/* OffCanvas Menu */}
      <div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
        {/* Close Button */}
        <button className="offCanvas__close-icon position-absolute top-0 end-0 mt-3 me-3" onClick={handleOffCanvas}>
          <i className="ri-close-line fs-4" />
        </button>

        {/* Header */}
        <div className="offCanvas__logo mb-5">
          <h3 className="mb-0">Get in Touch</h3>
        </div>

        {/* Contact Information */}
        <div className="offCanvas__side-info">
          <p className="description mb-30">
            As a Full Stack Developer, I’m passionate about creating dynamic, scalable web applications and love collaborating on exciting projects—let’s build something amazing together.
          </p>

          <ul className="contact-list">
            {contactInfo.map((info, index) => (
              <li key={index} className="mb-3">
                <span className="label">{info.label}</span>
                <p className="value mb-0">{info.value}</p>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="social-links mt-4">
            <p className="label mb-2">Social</p>
            <div className="links d-flex gap-3">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} target='_blank'>
                  <i className={`${link.icon} fs-18`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className={`offCanvas__overlay ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
    </>
  );
}
