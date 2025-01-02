import Link from 'next/link';


export default function Service2() {
  return (
    <>
      <section id="services" className="section-service-2 pt-5">
        <div className="container">
          <div className="rounded-3 border border-1 position-relative overflow-hidden">
            <div className="box-linear-animation position-relative z-1 p-lg-5 p-3">
              <div className="position-relative z-1">
                <div className="text-center">
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <svg
                      className="text-primary-2 me-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={5}
                      height={6}
                      viewBox="0 0 5 6"
                      fill="none"
                    >
                      <circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
                    </svg>
                    <span className="text-linear-4">Cooperation</span>
                  </div>
                  <h3 className="fw-bold">Designing Solutions</h3>
                  <p className="text-300">Customized to meet your requirements</p>
                </div>
                <div className="container mt-5">
                  <div className="row g-4">
                    {services.map((service, index) => (
                      <div key={index} className="col-lg-6 col-md-6">
                        <div className="card-servies-2 rounded-2 h-100 hover-up" style={{ paddingTop: '30px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={30} viewBox="0 0 24 24" fill="none">
                            <path d={service.iconPath} fill="#1F1F24" />
                          </svg>
                          <h6 className="my-3 fw-medium">{service.title}</h6>
                          <p className="fs-7 text-300 fw-regular">{service.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-60">
                    <p className="text-300">
                      Excited to take on <span className="text-dark">new projects</span> and collaborate.
                      <br />
                      Let&apos;s chat about your ideas.{' '}
                      <Link href="#" className="text-primary-2">
                        Reach out!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="position-absolute top-0 start-0 z-0"
                src="assets/imgs/home-page-2/services/bg.png"
                alt="background"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: 'Web Development',
    description:
      'Crafting visually appealing and user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React and NextJs.',
    iconPath:
      'M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z',
  },
  {
    title: 'Database Management',
    description:
      'Designing and managing databases with SQL and NoSQL technologies such as MySQL, PostgreSQL, and MongoDB.',
    iconPath:
      'M3 2.9918C3 2.44405 3.44495 2 3.9934 2H20.0066C20.5552 2 21 2.45531 21 2.9918V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM19 11V4H5V11H19ZM19 13H5V20H19V13ZM9 6H15V8H9V6ZM9 15H15V17H9V15Z',
  },
  {
    title: 'API Development',
    description:
      'Creating and integrating RESTful APIs to enable smooth communication between front-end and back-end systems.',
    iconPath:
      'M12 2C15.866 2 19 5.13401 19 9C19 9.11351 18.9973 9.22639 18.992 9.33857C21.3265 10.16 23 12.3846 23 15C23 18.3137 20.3137 21 17 21H7C3.68629 21 1 18.3137 1 15C1 12.3846 2.67346 10.16 5.00804 9.33857C5.0027 9.22639 5 9.11351 5 9C5 5.13401 8.13401 2 12 2ZM12 4C9.23858 4 7 6.23858 7 9C7 9.08147 7.00193 9.16263 7.00578 9.24344L7.07662 10.7309L5.67183 11.2252C4.0844 11.7837 3 13.2889 3 15C3 17.2091 4.79086 19 7 19H17C19.2091 19 21 17.2091 21 15C21 12.79 19.21 11 17 11C15.233 11 13.7337 12.1457 13.2042 13.7347L11.3064 13.1021C12.1005 10.7185 14.35 9 17 9C17 6.23858 14.7614 4 12 4Z',
  },
  {
    title: 'Performance Optimization',
    description:
      'Improving the speed and performance of web applications to provide a better user experience. Work with Node.js, Express.',
    iconPath:
      'M12 13.3336L2.77735 19.482C2.54759 19.6352 2.23715 19.5731 2.08397 19.3434C2.02922 19.2612 2 19.1647 2 19.066V4.93457C2 4.65842 2.22386 4.43457 2.5 4.43457C2.59871 4.43457 2.69522 4.46379 2.77735 4.51854L12 10.6669V4.93457C12 4.65842 12.2239 4.43457 12.5 4.43457C12.5987 4.43457 12.6952 4.46379 12.7774 4.51854L23.376 11.5842C23.6057 11.7374 23.6678 12.0479 23.5146 12.2776C23.478 12.3325 23.4309 12.3797 23.376 12.4163L12.7774 19.482C12.5476 19.6352 12.2372 19.5731 12.084 19.3434C12.0292 19.2612 12 19.1647 12 19.066V13.3336ZM10.3944 12.0003L4 7.73734V16.2632L10.3944 12.0003ZM14 7.73734V16.2632L20.3944 12.0003L14 7.73734Z',
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Developing scalable and secure payment solutions for e-commerce platforms tailored to your business needs.',
    iconPath:
      'M4.00436 6.41662L0.761719 3.17398L2.17593 1.75977L5.41857 5.002',
  }
];
