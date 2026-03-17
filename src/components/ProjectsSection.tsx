import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { supabase } from "../supabaseClient"; 


interface Project {
  id: number;
  title: string;
  description: string;
  github_link: string; 
  demo_link: string;   
  category: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        console.error("Error:", error.message);
      } else {
        setProjects(data || []);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <div className="text-center py-20 opacity-50">جاري تحميل ...</div>;

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-display text-3xl mb-10">المشاريع</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="card-surface group relative overflow-hidden p-6 border border-border rounded-2xl bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-foreground text-lg">{project.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {project.category || "عام"}
                  </span>
                </div>
                
                <p className="body-text mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    >
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.demo_link && project.demo_link !== "#" && (
                    <a
                      href={project.demo_link}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} /> معاينة
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;