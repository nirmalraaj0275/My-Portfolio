

export default function Contact2() {
	return (
		<>

			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-3">Let’s connect</h3>
									<form action="#">
										<div className="row g-3">
											<div className="col-md-6 ">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="name" name="name" placeholder="Your name" aria-label="username" />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="phone" name="phone" placeholder="Phone" aria-label="phone" />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="email" name="email" placeholder="Emaill" aria-label="email" />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="subject" name="subject" placeholder="Subject" aria-label="subject" />
											</div>
											<div className="col-12">
												<textarea className="form-control bg-3 border border-1 rounded-3" id="message" name="message" placeholder="Message" aria-label="With textarea" defaultValue={""} />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary-2 rounded-2">
													Send Message
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-phone-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Phone Number</span>
									<h6 className="mb-0">+91 73975 72076</h6>
								</div>
								<a href="tel:+1-234-567-8901" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-mail-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Email</span>
									<h6 className="mb-0">nirmalraaj0275@gmail.com</h6>
								</div>
								<a href="mailto:nirmalraaj0275@gmail.com" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
							{/* <div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-skype-fill text-primary-2 fs-26" />
									</div>
								</div>
								{/* <div className="ps-3 h-100">
									<span className="text-400 fs-6">Skype</span>
									<h6 className="mb-0">WilliamDesignUX</h6>
								</div>
								<a href="skype:SKYPENAME?add" className="position-absolute top-0 start-0 w-100 h-100" /> */}
							{/* </div> */} 
							<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
								<div className="d-inline-block">
									<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
										<i className="ri-map-2-fill text-primary-2 fs-26" />
									</div>
								</div>
								<div className="ps-3 h-100">
									<span className="text-400 fs-6">Address</span>
									<h6 className="mb-0">VLB Engineering, 1014/2 3, Arivozhi Nagar Rd, Arivozi Nagar, Kovaipudur, Coimbatore, Tamil Nadu 641042</h6>
								</div>
								<a href="https://www.google.com/maps/place/Orchids+By+Rakindo/@10.9322043,76.9228368,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba85b93aaaaaaab:0x1a4965e77e7e9cb!8m2!3d10.932199!4d76.9254117!16s%2Fg%2F1thmjfgd?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D" className="position-absolute top-0 start-0 w-100 h-100" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
