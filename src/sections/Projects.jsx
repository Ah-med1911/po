import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "/src/components/AnimatedBorderButton.jsx";
import ecommerceImg from "../assets/fourth.png";
import restaurantImg from "../assets/third.png";
import portfolioWebsiteImg from "../assets/portofolio1.png";
import staticWebsiteImg from "../assets/first.png";
import travelWebsiteImg from "../assets/Second.png";
import taskingImg from "../assets/task.png";

const projects = [
  {
    title: "Online Glasses Store",
    description:
      "A responsive online store that provides a smooth shopping experience with product browsing, search, filtering, cart management, and real-time total price calculation.",
    image: ecommerceImg,
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    link: "https://ah-med1911.github.io/js-project/",
    github: "https://github.com/Ah-med1911/js-project.git",
  },
  {
    title: "Fish Tail",
    description:
      "A responsive restaurant website with a modern design, showcasing menu items, restaurant information, and a smooth user experience across all devices.",
    image: restaurantImg,
    tags: ["HTML", "CSS", "Bootstrap", "Javascript"],
    link: "https://ah-med1911.github.io/bootstrab-project/",
    github: "https://github.com/Ah-med1911/bootstrab-project.git",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing my projects, skills, and experience.",
    image: portfolioWebsiteImg,
    tags: ["React", "Tailwind", "Vite"],
    link: "https://github.com/Ah-med1911",
    github: "https://github.com/Ah-med1911",
  },
  {
    title: "Perfume Store",
    description:
      "An HTML & CSS project demonstrating modern layouts, creative styling with pseudo-elements, and smooth hover effects.",
    image: staticWebsiteImg,
    tags: ["HTML", "CSS"],
    link: "https://ah-med1911.github.io/project1/",
    github: "https://github.com/Ah-med1911/project1.git",
  },
  {
    title: "Modern Fashion Style",
    description:
      "A stylish fashion landing page designed to showcase modern collections with a clean, responsive, and engaging user experience.",
    image: travelWebsiteImg,
    tags: ["HTML5", "CSS3"],
    link: "https://ah-med1911.github.io/project-2//",
    github: "https://github.com/Ah-med1911/project-2.git",
  },
  {
    title: "Small Task",
    description:
      "RESTful API for an e-commerce store built with Node.js, Express, and MongoDB, supporting JWT authentication, product and category management, user management, and a shopping cart system.",
    image: taskingImg,
    tags: ["HTML5", "CSS3"],
    link: "https://ah-med1911.github.io/cards-task/",
    github: "https://github.com/Ah-med1911/cards-task.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-purple-500">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, every project represents a step
            forward in my journey as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{
                animationDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 "
                />

                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    target="_blank"
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    target="_blank"
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center md:gap-0 gap-4">
                    <a href={project.link} target="_blank">
                      <ArrowUpRight className="w-5 h-5 cursor-pointer text-muted-foreground group-hover:text-primary" />
                    </a>
                    <a href={project.github} target="_blank">
                      <FaGithub className="w-5 h-5 cursor-pointer block md:hidden text-muted-foreground group-hover:text-primary" />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  );
}
