import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  const { id } = useParams();

  // Define the projects array with multiple project details
  const projects = [
    {
      id: "1",
      title: "Cozy Reminders",
      description: "A cozy aesthetic calendar app with reminder functionality.",
      image: "https://i.imgur.com/e4IQJW1.png",
      technologies: ["Vite", "Node.js", "SQLite"],
      challenge: "C",
      solution: "Solutions for Project Title 2...",
      outcome: "Outcomes for Project Title 2..."
    },
    {
      id: "2",
      title: "Project Title 2",
      description: "Description for Project Title 2.",
      image: "https://your-image-url.com/image2.jpg",
      technologies: ["Vue.js", "Express", "MySQL"],
      challenge: "Challenges for Project Title 2...",
      solution: "Solutions for Project Title 2...",
      outcome: "Outcomes for Project Title 2..."
    },
    // Add more projects as needed
  ];

  // Find the specific project based on the ID from URL parameters
  const project = projects.find((project) => project.id === id);

  // If project is not found, display a message or handle the error
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          />

          <h1 className="text-4xl font-bold mb-4 text-earth-900">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-earth-100 text-clay rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4 text-earth-800">Project Overview</h2>
            <p className="text-earth-700 mb-6">{project.description}</p>

            <h2 className="text-2xl font-semibold mb-4 text-earth-800">The Challenge</h2>
            <p className="text-earth-700 mb-6">{project.challenge}</p>

            <h2 className="text-2xl font-semibold mb-4 text-earth-800">The Solution</h2>
            <p className="text-earth-700 mb-6">{project.solution}</p>

            <h2 className="text-2xl font-semibold mb-4 text-earth-800">Outcome</h2>
            <p className="text-earth-700">{project.outcome}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
