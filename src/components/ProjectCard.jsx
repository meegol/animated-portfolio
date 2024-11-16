import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-earth-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-earth-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-earth-900">{project.title}</h3>
        <p className="text-earth-800 mb-4">{project.description}</p>
        <Link
          to={`/gallery/${project.id}`}
          className="inline-flex items-center text-accent-100 hover:text-accent-200 transition-colors duration-200"
        >
          View Project <ArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;