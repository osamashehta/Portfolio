import React from "react";
import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import DownloadCV from "../DownloadCV/DownloadCV";

// Custom Badge Component
const Badge = ({ children, variant = "default", className = "" }) => {
  const baseClasses =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors";
  const variants = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    outline:
      "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 bg-transparent",
    success:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-6 pb-3 ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3
    className={`text-lg font-semibold text-gray-900 dark:text-white ${className}`}
  >
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-600 dark:text-gray-400 ${className}`}>{children}</p>
);

// Custom Button Component
const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  asChild,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 text-sm",
  };

  if (asChild && children?.props) {
    return React.cloneElement(children, {
      className: `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`,
      ...props,
    });
  }

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const AboutHeader = () => {
  const projects = [
    {
      title: "KHUD - Beauty Deals Marketplace",
      description:
        "A full-featured bilingual beauty deals marketplace with secure authentication, mobile verification, role-based access, and comprehensive e-commerce functionality. Features include offer exploration, discount card purchasing, favorites management, and seamless payment integration.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Firebase",
        "ShadCN UI",
        "TanStack Query",
        "next-intl",
      ],
      githubUrl: null, // Company project
      liveUrl: null, // Company project
      featured: true,
      isCompanyProject: true,
    },
    {
      title: "Al-muwahhid Business Platform",
      description:
        "A comprehensive business platform featuring chat rooms, appointment booking, auction system for product negotiation, internal wallet system, and role-based account upgrades. Secure payment processing.",
      technologies: [
        "Next.js",
        "TypeScript",
        "ShadCN UI",
        "TanStack Query",
        "Zod",
        "next-intl",
      ],
      githubUrl: null, // Company project
      liveUrl: null, // Company project
      featured: true,
      isCompanyProject: true,
    },


     {
    title: "lunar care beauty",
    description:
      "Developed full authentication UI including login, signup, and secured access. Built core features such as ad listings, create ad form, booking appointments, and user profile management. Implemented dynamic notification center and in-app payment flow. Used React Hook Form for robust validation with real-time feedback via React Toastify. Managed API communication with Axios and server state using TanStack React Query.",
     githubUrl: null, // Company project
      liveUrl: null, // Company project
      featured: true,
      isCompanyProject: true,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Axios",
      "TanStack React Query",
      "next-intl",
      "Swiper.js",
      "React Toastify",
      "ShadCN UI",
    ],
    isCompanyProject: true,
  },
    {
      title: "AI-Assistant",
      description:
        "Built a modern AI chat assistant with real-time streaming responses using Vercel AI SDK (@ai-sdk/react) and AI Elements. Features a professional conversation UI, light/dark mode, and responsive design.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "Vercel AI SDK (@ai-sdk/react)",
        "AI Elements",
        "next-themes",
        "Lucide React Icons"
      ],
      githubUrl: "https://github.com/osamashehta/AI-Assistant",
      liveUrl: "",
      featured: true,
    },

  
  ];

  const experiences = [
    {
      company: "Almasader Alraqmia",
      role: "Frontend Developer",
      description:
        "Built and maintained 15+ production web applications using React.js, Next.js, and TypeScript. Optimized performance and implemented accessible, responsive UIs while collaborating with cross-functional teams.",
      current: true,
    },
    {
      company: "Route Academy",
      role: "Frontend Developer Intern",
      description:
        "Developed dynamic web applications using React, Next.js, and Vanilla JavaScript. Implemented efficient data handling with Redux Toolkit, TanStack Query, and RESTful APIs.",
      current: false,
    },
  ];

  return (
    <div className="about-section max-w-6xl mx-auto px-6 py-8 space-y-12">
      {/* Hero Section */}
      <section className="hero-content space-y-6">
        <div className="space-y-4">
          <h1 className="text-[16px] md:text-[24px] lg:text-[28px] font-bold text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
              Osama Shehta Saqr
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Frontend Developer from Egypt.
          </p>
        </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
    Frontend Developer with proven expertise in building{" "}
    <strong>scalable, multilingual web applications</strong> using modern
    React ecosystem technologies. Demonstrated proficiency in{" "}
    <strong>React.js</strong>, <strong>TypeScript</strong>,{" "}
    <strong>Next.js</strong>, and advanced state management solutions like{" "}
    <strong>Redux Toolkit</strong> and <strong>TanStack Query</strong>. Skilled
    in creating high-performance, accessible user interfaces with{" "}
    <strong>Tailwind CSS</strong> and <strong>ShadCN UI</strong> while ensuring
    seamless API integration and optimal user experience. Experienced in
    implementing <strong>real-time features</strong> including chat systems
    using <strong>Firebase</strong>, <strong>Pusher</strong>, and{" "}
    <strong>WebSockets</strong>. Additionally, I integrate <strong>AI capabilities</strong> into web applications using{" "}
    <strong>Vercel AI SDK (@ai-sdk/react)</strong> and{" "}
    <strong>AI Elements</strong> to build responsive, real-time streaming AI
    assistants. Committed to delivering innovative, user-centered solutions in
    collaborative development environments.
  </p>
</div>


        {/* Quick Stats */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Badge variant="secondary">15+ Projects Delivered</Badge>
          <Badge variant="secondary">React.js Expert</Badge>
          <Badge variant="secondary">Next.js 15 Ready</Badge>
          <Badge variant="secondary">Real-time Chat</Badge>
          <Badge variant="secondary">TypeScript Advocate</Badge>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 pb-2 w-fit">
          Experience
        </h2>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-l-4 border-l-blue-600 dark:border-l-yellow-400"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-[14px] md:text-[16px] lg:text-[20px]">
                    {exp.role} at {exp.company}
                  </CardTitle>
                  {exp.current && <Badge variant="success">Current</Badge>}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {exp.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-[16px] md:text-[18px] lg:text-[24px] font-bold text-gray-900 dark:text-white border-b-2 border-blue-600 dark:border-yellow-400 pb-2 w-fit">
            Featured Projects
          </h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
          >
            View All Projects
            <FaExternalLinkAlt className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-yellow-200"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.githubUrl ? (
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                          aria-label={`View ${project.title} live demo`}
                        >
                          <FaExternalLinkAlt className="w-4 h-4 text-blue-600 dark:text-yellow-400" />
                        </a>
                      )}
                    </div>
                  ) : (
                    <Badge variant="success">Almasader</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-2 border-blue-200 dark:border-yellow-200">
          <CardContent className="p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-3">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm passionate about creating user-centered solutions that blend
              performance, accessibility, and clean architecture. Let's
              collaborate on your next project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <DownloadCV />
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors text-sm"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/osamashehta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors text-sm"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default AboutHeader;
