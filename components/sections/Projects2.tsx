"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const projectData = [
  {
    id: 1,
    imgSrc: "assets/projects/yoga.png",
    title: "AMIZH Birth&Yoga - Online Pregnancy Yoga Sessions",
    description:
      "Developed the front-end of the Amizh Birth and Yoga website, creating an intuitive and visually appealing platform for women’s wellness services",
    client: "Conceptual JSC",
    completionTime: "2 months",
    technologies: "Node.js, Express js, Ejs",
    webSiteLink: "https://www.amizhbirthandyoga.com/",
    githubLink: "https://github.com/nirmalraaj0275/AmizhBirthandYoga",
    pageLink: "/projectDetails/1",
  },
  {
    id: 2,
    imgSrc: "assets/projects/relation.png",
    title: "Relationswork",
    description:
      "Developed a business website for Relationswork with an admin dashboard for managing blog posts and SEO optimization for better search engine ranking.",
    client: "Conceptual JSC",
    completionTime: "3 weeks",
    technologies: "Next.js, Firebase, SEO, Blog Management",
    webSiteLink: "https://www.relationswork.in/",
    githubLink: "#",
    pageLink: "/projectDetails/2",
  },
  {
    id: 3,
    imgSrc: "assets/projects/nextone.png",
    title: "NextOne Solutions",
    description:
      "Redesigned NextOne Solutions website using Next.js to enhance user experience, improve load times, and ensure mobile responsiveness, aligning with their business goals.",
    client: "Conceptual JSC",
    completionTime: "1 month",
    technologies: "Next.js, Web Design",
    webSiteLink: "https://www.nextonesolutions.in/",
    githubLink: "https://github.com/nirmalraaj0275/NextOne_3D",
    pageLink: "/projectDetails/3",
  },
  {
    id: 4,
    imgSrc: "assets/projects/conoide.png",
    title: "Cognoid Systems Private Limited",
    description:
      "Developed the frontend of the Cognoid website using Next.js, focusing on creating a responsive and dynamic user interface. Ensured seamless navigation, fast load times, and an overall enhanced user experience.",
    client: "Conceptual JSC",
    completionTime: "1 month",
    technologies: "Next.js, Web Design",
    webSiteLink: "https://product-cognoid.vercel.app/",
    githubLink: "https://github.com/nirmalraaj0275/Product_Cognoid",
    pageLink: "/projectDetails/4",
  },
];

export default function Projects2() {
  return (
    <section className="projects-section pt-5"
    id="projects">
      
      <div className="container">
        <div className="rounded-3 border border-1 position-relative overflow-hidden">
          <div className="box-linear-animation position-relative z-1">
            <div className="p-lg-6 p-md-6 p-3 position-relative z-1">
              <h3 className="fw-bold text-center">My Recent Works</h3>
              <Swiper
                {...swiperOptions}
                className="swiper slider-two pb-3 position-relative"
              >
                {projectData.map(
                  ({
                    id,
                    imgSrc,
                    title,
                    description,
                    completionTime,
                    technologies,
                    pageLink,
                  }) => (
                    <SwiperSlide key={id}>
                      <div className="p-lg-5 p-md-4 p-3 border mt-5 bg-light">
                        <div className="row">
                          <div className="col-lg-5">
                            <Link href={pageLink}>
                              <img
                                className="project-image w-100"
                                src={imgSrc}
                                alt={title}
                              />
                            </Link>
                          </div>
                          <div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
                            <h4 className="text-gradient">{title}</h4>
                            <p>{description}</p>
                            <ul className="mt-4 list-unstyled">
                              <li className="mb-3 border-bottom pb-3">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-0 fw-bold">Completion Time</p>
                                  <p className="mb-0">{completionTime}</p>
                                </div>
                              </li>
                              <li className="mb-3 border-bottom pb-3">
                                <div className="d-flex justify-content-between">
                                  <p className="mb-0 fw-bold">Technologies</p>
                                  <p className="mb-0">{technologies}</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
              {/* Add Navigation Arrows */}
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .project-image {
          transition: transform 0.3s ease-in-out;
        }
        .project-image:hover {
          transform: scale(1.1);
        }
        .swiper-button-prev,
        .swiper-button-next {
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          color: #fff;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        .text-gradient {
          background: yellow;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </section>
  );
}
