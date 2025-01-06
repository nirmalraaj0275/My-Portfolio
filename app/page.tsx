import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Blog2 from "@/components/sections/Blog2"
import Brands1 from "@/components/sections/Brands1"
// import Brands2 from "@/components/sections/Brands2"
import Contact1 from "@/components/sections/Contact1"
import Contact2 from "@/components/sections/Contact2"
import Home1 from "@/components/sections/Home1"
import Projects1 from "@/components/sections/Projects1"
import Projects2 from "@/components/sections/Projects2"
import Service1 from "@/components/sections/Service1"
import Service2 from "@/components/sections/Service2"
import Skills1 from "@/components/sections/Skills1"
import Skills2 from "@/components/sections/Skills2"
import Static1 from "@/components/sections/Static1"
import Static2 from "@/components/sections/Static2"
import Resume1 from "@/components/sections/Resume1"
import Testimonials1 from "@/components/sections/Testimonials1"
import Link from "next/link"
import Home2 from "@/components/sections/Home2"


export default function Home() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2}>
				<Home2 />
				<Static2 />
				<Service2 />
				<Projects2 />
				<br/>
				<Resume1 />
				<Skills2 />
				{/* <Brands1 />
				<Testimonials1 />
				<br/>
				<Blog2 /> */}
				<Contact2 />
			</Layout>
		</>
	)
}