import Link from "next/link";
import Marquee from "react-fast-marquee";

// Type definitions for ResumeCard props
type ResumeCardProps = {
  title: string;
  icon: string;
  items: Array<{
    date: string;
    title: string;
    subtitle?: string;
    precentage?: string;
  }>;
};

// Type definitions for ResumeCardItem props
type ResumeCardItemProps = {
  date: string;
  title: string;
  subtitle?: string;
  precentage?: string;
};

// ResumeCardItem component
function ResumeCardItem({ date, title, subtitle, precentage }: ResumeCardItemProps) {
  return (
    <div className="resume-card-item px-4 py-3 mt-5">
      <div className="d-flex align-items-end">
        <div>
          <p className="fw-extra-bold text-green">{date}</p>
          <h5>{title}</h5>
          <p className="text-300 mb-0">{subtitle}</p>
        </div>
        {precentage && (
          <h3 className="text-linear- ms-auto fw-semibold">
            {precentage}
            <span className="fs-4 fw-bold">%</span>
          </h3>
        )}
      </div>
    </div>
  );
}

// ResumeCard component
function ResumeCard({ title, icon, items }: ResumeCardProps) {
  return (
    <div className="resume-card p-lg-6 p-4 h-100">
      <div className="resume-card-header d-flex align-items-end">
        <img
          className="border-linear-1 border-3 pb-2 pe-2"
          src={icon}
          alt={`${title} Icon`}
          style={{ width: "50px", height: "50px" }}
        />
        <h3 className="fw-semibold mb-0 border-bottom border-600 border-3 pb-2 w-100">
          {title}
        </h3>
      </div>
      <div className="resume-card-body">
        {items.map((item, index) => (
          <ResumeCardItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

// Main Resume1 component
export default function Resume1({
  education,
  experience,
}: {
  education: ResumeCardProps["items"];
  experience: ResumeCardProps["items"];
}) {
  return (
    <section
      id="resume"
      className="section-resume-1 position-relative pt-125 overflow-hidden"
      data-background="assets/imgs/projects/projects-1/background.png"
    >
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-7 me-auto">
            <h3 className="ds-3 mt-3 mb-3 text-bold">My Resume</h3>
            <span className="fs-5 fw-medium text-200">
              I believe that working hard and trying to learn every day will
              <br />
              make me improve in satisfying my customers.
            </span>
          </div>
          <div className="col-lg-auto">
            <Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto ">
              Get in touch
              <i className="ri-arrow-right-up-line" />
            </Link>
          </div>
        </div>
        <div className="row mt-6">
          <div className="col-lg-6 col-12">
            <ResumeCard
              title="Education"
              icon="/assets/imgs/resume/resume-1/graduation-cap.png"
              items={education}
            />
          </div>
          <div className="col-lg-6 col-12">
            <ResumeCard
              title="Experience"
              icon="/assets/imgs/resume/resume-1/experiment.png"
              items={experience}
            />
          </div>
        </div>
      </div>
      <Marquee className="carouselTicker carouselTicker-left position-relative z-1">
        <ul className="carouselTicker__list m-0">
          <li className="carouselTicker__item mt-6">
            <h3 className="stroke fs-110 text-uppercase text-white">
              Full Stack . Development . Solutions
            </h3>
          </li>
          <li className="carouselTicker__item mt-6">
            <h3 className="stroke fs-110 text-uppercase text-white">
              Full Stack . Development . Solutions
            </h3>
          </li>
          <li className="carouselTicker__item mt-6">
            <h3 className="stroke fs-110 text-uppercase text-white">
              Full Stack . Development . Solutions
            </h3>
          </li>
          <li className="carouselTicker__item mt-6">
            <h3 className="stroke fs-110 text-uppercase text-white">
              Full Stack . Development . Solutions
            </h3>
          </li>
        </ul>
      </Marquee>
    </section>
  );
}

// Default props
Resume1.defaultProps = {
  education: [
    {
      date: "2021-2025",
      title: "BE Computer Science and Engineering",
      subtitle: "SNS College of Technology",
      precentage: "79.9",
    },
    {
      date: "2018-2021",
      title: "Diploma in Mechanical Engineering",
      subtitle: "CIT Sandwich Polytechnic College",
      precentage: "81",
    },
    {
      date: "2017-2018",
      title: "Secondary School Leaving Certificate.",
      subtitle: "Sindhi Vidyalaya Matric Hr. Sec. School",
      precentage: "83",
    },
  ],
  experience: [
    {
      date: "Jan 2024 - Present",
      title: "Full Stack Developer",
      subtitle: "NextOne Solution",
    },
    {
      date: "Jun 2024 - July 2024",
      title: "Front End Developer",
      subtitle: "Tech Sac Solution",
    },
    {
      date: "May 2024",
      title: "Frontend Development Internship",
      subtitle: "Code-Alpha",
    },
  ],
};
