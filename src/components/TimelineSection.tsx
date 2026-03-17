import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2024–2025",
    title: "تدريب برنامج 1000 مبرمج و شركة الأنظمة المتجددة",
    description: "تدريب مكثف في تطوير الويب Back-end باستخدام Laravel و PHP",
    current: false,
  },
 
  {
    year: "2023–2027",
    title: "جامعة Başakşehir",
    description: "بكالوريوس هندسة البرمجيات — التخرج المتوقع 2027",
    current: true,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="heading-display text-3xl mb-10">المسيرة المهنية</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute right-4 top-0 bottom-0 w-[2px] bg-border" />
          <div className="space-y-12">
            {timelineItems.map((item, i) => (
              <motion.div
                key={i}
                className="relative pr-14"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as const }}
              >
                <div
                  className={`absolute right-[10px] top-1.5 w-[12px] h-[12px] rounded-full border-2 ${
                    item.current
                      ? "bg-primary border-primary shadow-[0_0_12px_hsl(217,91%,60%,0.6)]"
                      : "bg-card border-muted-foreground/30"
                  }`}
                />
                <div className="card-surface">
                  <span className="text-xs text-primary tabular-nums font-medium block mb-2">{item.year}</span>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="body-text text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
