import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: "Cozy Reminders",
    description: "A cozy aesthetic calendar app with reminder-functionality.",
    image: "https://i.imgur.com/e4IQJW1.png"
  },
  {
    id: 2,
    title: "Assignment Tracker",
    description: "Simple assignment tracker with persistent database storage.",
    image: "https://i.imgur.com/16FMucC.png"
  },
  {
    id: 3,
    title: "King Coin",
    description: "Budget and expense tracker built on a MERN stack.",
    image: "https://i.imgur.com/30nA1D3.png"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen pt-32 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-earth-200 rounded-lg p-8 shadow-lg border border-earth-300"
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-clay to-terracotta bg-clip-text text-transparent">
              Software Developer
            </h1>
            <p className="text-xl text-earth-800 mb-8 max-w-2xl mx-auto">
              Producing quality applications, one Earth-Toned system at a time.
              BSIT Student at CEU Makati LV Campus by day, gamer at heart by night.
            </p>
          </div>

          {/* Featured Projects Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-earth-900 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-earth-900">Let's Connect</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/meegol" className="text-earth-600 hover:text-clay transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:miguellouiscarandang@gmail.com" className="text-earth-600 hover:text-clay transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+639163241455" className="text-earth-600 hover:text-clay transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;