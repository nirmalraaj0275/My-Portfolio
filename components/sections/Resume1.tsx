import Link from "next/link";
import Marquee from "react-fast-marquee";

type ResumeItem = {
  date: string;
  title: string;
  subtitle?: string;
  percentage?: string;
};

// ResumeCardItem component for individual resume entries
function ResumeCardItem({ date, title, subtitle, percentage }: ResumeItem) {
  return (
    <div className="resume-card-item px-4 py-3 mt-5">
      <div className="d-flex align-items-end">
        <div>
          <p className="fw-bold text-green">{date}</p>
          <h5>{title}</h5>
          <p className="text-300 mb-0">{subtitle}</p>
        </div>
        {percentage && (
          <h3 className="text-linear- ms-auto fw-semibold">
            {percentage}
            <span className="fs-4 fw-bold">%</span>
          </h3>
        )}
      </div>
    </div>
  );
}

// ResumeCard component for categorized sections
function ResumeCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: string;
  items: ResumeItem[];
}) {
  return (
    <div className="resume-card rounded-3 p-4 h-100 hover-up">
      <div className="resume-card-header d-flex align-items-center">
        <img
          src={icon}
          alt={`${title} Icon`}
          className="border-3 pb-2 pe-2"
          style={{ width: "50px", height: "50px" }}
        />
        <h3 className="fw-semibold ms-3 mb-0">{title}</h3>
      </div>
      <div className="resume-card-body mt-4">
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
  education: ResumeItem[];
  experience: ResumeItem[];
}) {
  return (
    <section
      id="resume"
      className="section-resume-1 position-relative pt-125 overflow-hidden"
      data-background="assets/imgs/projects/projects-1/background.png"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="fw-bold">My Resume</h3>
          <p className="fs-5 text-300">
            I believe in continuous learning and hard work to achieve excellence in my field.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-6 col-md-6">
            <ResumeCard
              title="Education"
              icon="/assets/imgs/resume/resume-1/graduation-cap.png"
              items={education}
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <ResumeCard
              title="Experience"
              icon="/assets/imgs/resume/resume-1/experiment.png"
              items={experience}
            />
          </div>
        </div>
      </div>
      <Marquee className="carouselTicker position-relative z-1 mt-5">
        <ul className="carouselTicker__list m-0">
          <li className="carouselTicker__item">
            <h3 className="stroke fs-110 text-uppercase text-white">
              Full Stack . Development . Solutions
            </h3>
          </li>
          <li className="carouselTicker__item">
            <h3 className="stroke fs-110 text-uppercase text-white">
              Continuous Learning . Innovative Design . Collaboration
            </h3>
          </li>
        </ul>
      </Marquee>
    </section>
  );
}

// Default Props
Resume1.defaultProps = {
  education: [
    {
      date: "2021-2025",
      title: "BE Computer Science and Engineering",
      subtitle: "SNS College of Technology",
      percentage: "79.9",
    },
    {
      date: "2018-2021",
      title: "Diploma in Mechanical Engineering",
      subtitle: "CIT Sandwich Polytechnic College",
      percentage: "81",
    },
    {
      date: "2017-2018",
      title: "Secondary School Leaving Certificate",
      subtitle: "Sindhi Vidyalaya Matric Hr. Sec. School",
      percentage: "83",
    },
  ],
  experience: [
    {
      date: "Jan 2024 - Present",
      title: "Full Stack Developer",
      subtitle: "NextOne Solution",
    },
    {
      date: "Jun 2024 - Jul 2024",
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
