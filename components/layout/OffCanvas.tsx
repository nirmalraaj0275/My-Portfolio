import Link from 'next/link'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
					<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
						<button><i className="ri-close-line" /></button>
					</div>
					<div className="offCanvas__logo mb-5">
						<h3 className="mb-0">Get in touch</h3>
					</div>
					<div className="offCanvas__side-info mb-30">
						<div className="contact-list mb-30">
							<p className="fs-6 fw-medium text-200 mb-5">As a Full Stack Developer, I’m passionate about creating dynamic, scalable web applications and love collaborating on exciting projects—let’s build something amazing together</p>
							<div className="mb-3">
								<span className="text-400 fs-5">Phone Number</span>
								<p className="mb-0">+91 7397572076</p>
							</div>
							<div className="mb-3">
								<span className="text-400 fs-5">Email</span>
								<p className="mb-0">nirmalraaj0275@gmail.com</p>
							</div>
							{/* <div className="mb-3">
								<span className="text-400 fs-5">Skype</span>
								<p className="mb-0">WilliamDesignUX</p>
							</div> */}
							<div className="mb-3">
								<span className="text-400 fs-5">Address</span>
								<p className="mb-0">VLB Engineering, 1014/2 3, Arivozhi Nagar Rd, Arivozi Nagar, Kovaipudur, Coimbatore, Tamil Nadu 641042</p>
							</div>
						</div>
						<div className="contact-list">
							<p className="text-400 fs-5 mb-2">Social</p>
							<div className="d-md-flex d-none gap-3">
								{/* <Link href="/http://facebook.com">
									<i className="ri-facebook-circle-fill fs-18" />
								</Link>
								<Link href="/http://twitter.com">
									<i className="ri-twitter-x-fill fs-18" />
								</Link> */}
								<Link href="https://www.linkedin.com/in/nirmal-raj-r/">
									<i className="ri-linkedin-fill fs-18" />
								</Link>
								<Link href="https://github.com/nirmalraaj0275">
									<i className="ri-github-fill fs-18" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`}  onClick={handleOffCanvas}/>
		</>
	)
}
