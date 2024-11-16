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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-clay to-terracotta bg-clip-text text-transparent">
              Software Developer
            </h1>
            <p className="text-xl text-earth-700 mb-8 max-w-2xl mx-auto">
              Producing quality applications, one Earth-Toned system at a time.\n BSIT Student at CEU Makati LV Campus by day, gamer at heart by night.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 px-4 bg-earth-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-earth-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8 text-earth-800">Let's Connect</h2>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;