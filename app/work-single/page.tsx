
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function WorkSingle({ title, description,stdate,compdate,services,web,img,prodesc,technologies}) {

	return (
		<>
<Layout headerStyle={2} footerStyle={2}>
      <div>
        <section className="section-work-single section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-lg-auto mb-lg-0 text-center">
                <Link href="/#" className="btn-magical-inline text-uppercase">
                  Work Details
                </Link>
                <h3 className="ds-3 mt-3 mb-4 text-dark">{title}</h3>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-4 py-8">
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Start Date</p>
                  <h6>{stdate}</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Complete Date</p>
                  <h6>{compdate}</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Services</p>
                  <h6>{services}</h6>
                </div>
                <div className="bg-6 px-5 py-3 rounded-2">
                  <p className="text-300 mb-0">Website</p>
                  <h6>{web}</h6>
                </div>
              </div>

              <img src={img} alt={title} className="img-fluid" />

              <div className="col-lg-8 mx-lg-auto mt-8">
                <h5 className="fs-5 fw-medium mt-4">Description</h5>
                <div className="text-300">{description}</div>

                <h5 className="fs-5 fw-medium mt-4">Technologies Used</h5>
                <ul>
                  {technologies.map((tech, index) => (
                    <li key={index}>
                      <p className="text-dark fw-bold">
                        {tech.title}: <span className="text-300 fw-medium">{tech.description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>

		</>
	)
}