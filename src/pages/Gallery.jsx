import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Cozy Reminders",
    description: "A cozy aesthetic calendar app with reminder-functionality.",
    image: "https://i.imgur.com/e4IQJW1.png",
  },
  {
    id: 2,
    title: "Assignment Tracker",
    description: "Simple assignment tracker with persistent database storage.",
    image: "https://i.imgur.com/16FMucC.png",
  },
  {
    id: 3,
    title: "King Coin",
    description: "Budget and expense tracker built on a MERN stack.",
    image: "https://i.imgur.com/30nA1D3.png"
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen pt-20 px-4 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-earth-800">PROJECT GALLERY</h1>
          <p className="text-earth-700 max-w-2xl mx-auto">
            My previous projects, made by a human running on caffeine and a passion for coding.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;