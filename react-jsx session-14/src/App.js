import ProfileCard from './ProfileCard';
import SocialLinks from './SocialLinks';
import ProjectCard from './ProjectCard';

export default function App() {
  const links = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/daya-trivedi-070b94281'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/8849385782'
    },
    {
      name: 'Email',
      url: 'mailto:trivedidaisy654@gmail.com'
    }
  ];

  return (
    <div className="container py-5">

      <ProfileCard
        name="Daya Trivedi"
        image="https://via.placeholder.com/150"
        bio="Front End Developer | React JS | UI/UX"
      />

      <div className="mt-4">
        <h2>About Me</h2>
        <p>
          I am a Front End Developer passionate about building responsive,
          interactive and user-friendly web experiences using HTML, CSS,
          JavaScript and React JS.
        </p>

        <p>
          I enjoy creating modern interfaces, exploring frontend technologies,
          designing digital experiences and turning ideas into functional web
          products.
        </p>
      </div>

      <SocialLinks
        links={links}
        theme="light"
      />

      <div className="mt-5">
        <h2>Skills</h2>

        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-dark p-2">HTML</span>
          <span className="badge bg-dark p-2">CSS</span>
          <span className="badge bg-dark p-2">JavaScript</span>
          <span className="badge bg-dark p-2">React JS</span>
          <span className="badge bg-dark p-2">Bootstrap</span>
          <span className="badge bg-dark p-2">SQL</span>
          <span className="badge bg-dark p-2">GitHub</span>
          <span className="badge bg-dark p-2">Git</span>
          <span className="badge bg-dark p-2">Power BI</span>
          <span className="badge bg-dark p-2">Excel</span>
          <span className="badge bg-dark p-2">WordPress</span>
        </div>
      </div>

      <div className="mt-5">
        <h2>Projects</h2>

        <ProjectCard
          title="Creator Personal Website"
          description="A fully responsive developer portfolio built using HTML, CSS, JavaScript and Bootstrap, featuring About, Skills, Projects and Contact sections."
        />

        <ProjectCard
          title="Persona – Digital Identity for Modern Creators"
          description="A responsive personal-brand website for creators, freelancers and developers featuring social links, animations, smooth scrolling and a mobile-friendly navigation."
        />

        <ProjectCard
          title="Startup X"
          description="A responsive business landing page with services, pricing, testimonials, team and contact sections, enhanced with JavaScript interactions."
        />

        <ProjectCard
          title="VentureFlow"
          description="A reusable startup homepage framework built with HTML, CSS, JavaScript and Bootstrap/Tailwind CSS, featuring FAQ, animations, counters and a sticky navigation."
        />

        <ProjectCard
          title="Swan Solution – Hotel Management System"
          description="A frontend hotel management system with guest registration, validation, searchable submissions and browser local-storage persistence."
        />

        <ProjectCard
          title="Hashcrypt Technologies – Customer Interaction System"
          description="A paperless customer complaint management system with complaint registration, dashboard, staff login and responsive Bootstrap UI."
        />
      </div>

      <div className="mt-5">
        <h2>Education</h2>

        <p>
          <strong>M.C.A</strong> — GLS, Gujarat Law Society
          <br />
          2022–2025
        </p>

        <p>
          <strong>B.C.A</strong> — P.D. Pandya Institute of Computer Application
          <br />
          2019–2022
        </p>
      </div>

      <div className="mt-5">
        <h2>Contact</h2>

        <p>
          📧 <a href="mailto:trivedidaisy654@gmail.com">
            trivedidaisy654@gmail.com
          </a>
        </p>

        <p>
          📍 Ahmedabad, Gujarat
        </p>
      </div>

    </div>
  );
}
