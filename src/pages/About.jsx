import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-32 px-4 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-earth-200 rounded-lg p-8 shadow-lg border border-earth-300"
        >
          <h1 className="text-4xl font-bold mb-8 text-earth-900">About Me</h1>
          
          <div className="space-y-6 text-earth-800">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-earth-900">Background</h2>
              <p>
                I am a BSIT Student at CEU Makati LV Campus, passionate about creating
                quality applications with a focus on user experience and clean code.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-earth-900">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-earth-300/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="list-disc list-inside">
                    <li>React.js</li>
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-earth-300/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <ul className="list-disc list-inside">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div className="bg-earth-300/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Tools</h3>
                  <ul className="list-disc list-inside">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                    <li>Postman</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-earth-900">Interests</h2>
              <p>
                When I'm not coding, you can find me gaming or exploring new technologies.
                I'm particularly interested in web development and creating intuitive user
                interfaces that make a difference in people's lives.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-earth-900">Education</h2>
              <div className="bg-earth-300/50 rounded-lg p-4">
                <h3 className="font-semibold">Bachelor of Science in Information Technology</h3>
                <p>CEU Makati LV Campus</p>
                <p className="text-earth-700">Current</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
