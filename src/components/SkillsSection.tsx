import { motion } from "framer-motion";
import { Database, Globe, Wrench } from "lucide-react";

const skillGroups = [
  {
    title: "تطوير الـ Back-end",
    icon: Database,
    skills: [
      { name: "Laravel", solid: true, icon: "🟧" },
      { name: "PHP", solid: true, icon: "🐘" },
      { name: "MySQL", solid: true, icon: "🗄️" },
      { name: "PHPUnit", solid: true, icon: "✅" },
    ],
  },
  {
    title: "تطوير الـ Front-end",
    icon: Globe,
    skills: [
      { name: "React", solid: true, icon: "⚛️" },
      { name: "JavaScript", solid: true, icon: "🟨" },
      { name: "HTML5", solid: true, icon: "🌐" },
      { name: "CSS3", solid: true, icon: "🎨" },
      { name: "Tailwind CSS", solid: true, icon: "💨" },
    ],
  },
  {
    title: "أدوات وتقنيات",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", solid: true, icon: "🔀" },
      { name: "Flowise (AI)", solid: true, icon: "🤖" },
      { name: "C++", solid: false, icon: "⚙️" },
      { name: "django", solid: false, icon: "🦄" },
      { name: "supabase", solid: true, icon: "⚡" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="heading-display text-3xl mb-10">المهارات</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  className="card-surface"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] as const }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-[12px] bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-3 rounded-[12px] px-3 py-2 transition-colors ${
                          skill.solid
                            ? "bg-primary/5 hover:bg-primary/10"
                            : "opacity-50 bg-secondary/50"
                        }`}
                      >
                        <span className="text-base">{skill.icon}</span>
                        <span className={`text-sm font-medium ${skill.solid ? "text-foreground" : "text-muted-foreground"}`}>
                          {skill.name}
                        </span>
                        {!skill.solid && (
                          <span className="text-xs badge-tech mr-auto">قيد التعلّم</span>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
