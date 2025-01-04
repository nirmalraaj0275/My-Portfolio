'use client';
import WorkSingle from '@/components/work-single/page';
import React, { useEffect, useState } from 'react';

const Page = ({ params }: { params: { id: string } }) => {
    const id = params.id;
    const [details, setDetails] = useState<any>(null);
    const [technologies, setTechnologies] = useState<
    { title: string; description: string }[]
  >([]);

    const projectDetails = [
        {
            id: 1,
            title: "AMIZH Birth&Yoga - Online Pregnancy Yoga Sessions",
            description: "For the Amizh Birth and Yoga project, I developed a business website using Node.js, Express, REST API, EJS, and JavaScript. The site features a feminine design that aligns with the target audience, ensuring a seamless user experience. I integrated the Swish Payment System for secure transactions, specifically tailored for the client in Sweden. The website is responsive, scalable, and optimized to meet the needs of the client’s growing business. The project is designed to provide an intuitive and secure platform for the pregnancy yoga service.",
            startDate: "04 Feb 2024",
            completionDate: "27 Mar 2024",
            services: "Web Site Developed",
            website: "www.amizhbirthandyoga.com",
            image: "/assets/imgs/work/yoga2.jpg",
            projectDescription: "For the Amizh Birth and Yoga project...",
            technologiesUsed: [
                { title: "Front-End", description: "Utilized EJS for dynamic templates and JavaScript for interactivity." },
                { title: "Back-End", description: "Built using Node.js and Express, with a structured REST API for data handling." },
                { title: "Database", description: "MongoDB for flexible data storage and retrieval." },
                { title: "User-Friendly Interface:", description: "Integrated the Swish Payment System, ensuring secure and smooth transactions for Swedish users." },
                { title: "Responsive Design", description: "Made the app responsive to different screen sizes and orientations, providing a consistent user experience across various devices." },
            ],
        },
        {
          id: 2,
          title: "Relationswork",
          description: "For the Relationswork project, I created a business website using Next.js, featuring an admin dashboard for managing daily blogs. SEO was optimized to increase the site's visibility on search engines, ensuring the client’s services reach a wider audience. Firebase was used for backend data storage, providing a scalable and secure solution. The website is fully responsive, designed to adapt to all devices, and provides a smooth user experience for both site visitors and content admins.",
          startDate: "01 Apr 2024",
          completionDate: "26 Apr 2024",
          services: "Business Website",
          website: "www.relationswork.in",
          image: "/assets/projects/rel.png",
          projectDescription: "I developed a business website for Relationswork, aimed at showcasing their services to users. ",
          technologiesUsed: [
              { title: "Front-End", description: "Built using Next.js to ensure a fast, dynamic, and SEO-friendly website." },
              { title: "Back-End", description: "Developed an admin interface for blog management, including the ability to post, edit, and delete daily blogs." },
              { title: "Database", description: "Used Firebase for secure and scalable backend data storage." },
              { title: "User-Friendly Interface:", description: "Focused on delivering an intuitive and smooth experience for both users and admins." },
              { title: "Responsive Design", description: "Optimized the website to be fully responsive across various devices and screen sizes." },
          ],
      },
      {
        id: 3,
        title: "NextOne Solutions",
        description: "For NextOne Solutions, I redesigned their company website to provide a more modern, user-friendly experience. The new design enhances their digital presence and aligns with their business objectives. Using Next.js, I ensured fast load times, responsive design, and a seamless experience for users across all devices.",
        startDate: "01 Apr 2024",
        completionDate: "25 Apr 2024",
        services: " ",
        website: "www.nextonesolutions.in",
        image: "/assets/projects/next.png",
        projectDescription: " I developed a completely redesigned company website using Next.js. ",
        technologiesUsed: [
            { title: "Front-End", description: "Built with Next.js to ensure fast loading speeds and better performance through server-side rendering." },
            { title: "Back-End", description: "Built using Node.js and Express, with a structured REST API for data handling." },
            { title: "SEO Optimization:", description: "Implemented SEO best practices to improve visibility and ranking on search engines." },
            { title: "Custom Features:", description: "Integrated custom features to highlight services, company information, and call-to-action elements effectively." },
            { title: "Responsive Design", description: " Ensured the website is mobile-friendly and adapts seamlessly to all screen sizes." },
        ],
    },
    {
      id: 4,
      title: "Cognoid-System",
      description: "For the Cognoid project, I developed a business website using Next.js, incorporating an admin dashboard to manage daily blogs. The site was optimized for SEO, improving search engine visibility to help the client’s services reach a broader audience. Firebase was integrated for backend data storage, offering a secure and scalable solution. The website is fully responsive, ensuring a seamless experience across all devices for both visitors and content administrators.",
      startDate: "05 Aug 2024",
      completionDate: "10 Oct 2024",
      services: "Web Site Developed",
      website: "product-cognoid.vercel.app",
      image: "/assets/projects/cod.png",
      projectDescription: "I developed a business website for Relationswork, aimed at showcasing their services to users. ",
          technologiesUsed: [
              { title: "Front-End", description: "Built using Next.js to ensure a fast, dynamic, and SEO-friendly website." },
              { title: "Back-End", description: "Developed an admin interface for blog management, including the ability to post, edit, and delete daily blogs." },
              { title: "Database", description: "Used Firebase for secure and scalable backend data storage." },
              { title: "User-Friendly Interface:", description: "Focused on delivering an intuitive and smooth experience for both users and admins." },
              { title: "Responsive Design", description: "Optimized the website to be fully responsive across various devices and screen sizes." },
          ],
  },
    ];

    useEffect(() => {
        const filteredData = projectDetails.find((item) => item.id === parseInt(id));
        setDetails(filteredData);
        if (filteredData) {
            setTechnologies(filteredData.technologiesUsed);
        }
    }, [id]);

    return (
        <>
            {details ? (
                <>
                    <WorkSingle
                        title={details.title}
                        description={details.description}
                        stdate={details.startDate}
                        compdate={details.completionDate}
                        services={details.services}
                        web={details.website}
                        img={details.image}
                        prodesc={details.projectDescription}
                        technologies={technologies} // Pass technologies to WorkSingle
                    />
                </>
            ) : (
                <div>No data</div>
            )}
        </>
    );
};

export default Page;
