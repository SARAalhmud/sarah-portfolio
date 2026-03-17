import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronRight, ChevronLeft, X } from "lucide-react";

const certs = [
  {
    title: "شهادة Back-end Development معتمدة",
    issuer: "برنامج 1000 مبرمج",
    description: "إتقان تطوير الـ Back-end باستخدام Laravel و PHP و MySQL",
  },
  {
    title: "شهادة أساسيات السلامة الرقمية",
    issuer: "فريق سلامتك",
    description: "أساسيات الأمن السيبراني والسلامة الرقمية",
  },
  {
    title: "شهادة تدريب عملي في قسم البرمجيات",
    issuer: "شركة الأنظمة المتجددة",
    description: "تدريب عملي في تطوير أنظمة الويب وبناء APIs",
  },
];

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const next = () => setCurrentIndex((i) => (i + 1) % certs.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + certs.length) % certs.length);

  return (
    <section id="certifications" className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="heading-display text-3xl mb-10">الشهادات</h2>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
                  className="card-surface cursor-pointer max-w-xl mx-auto"
                  onClick={() => setExpandedIndex(currentIndex)}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{certs[currentIndex].title}</h3>
                      <p className="text-sm text-primary mb-2">{certs[currentIndex].issuer}</p>
                      <p className="body-text text-sm">{certs[currentIndex].description}</p>
                      <p className="text-xs text-muted-foreground mt-3">انقر للتفاصيل</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={prev} className="p-2 rounded-[12px] bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {certs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button onClick={next} className="p-2 rounded-[12px] bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="card-surface max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 left-4 p-1 rounded-full bg-secondary text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-[12px] bg-primary/10 flex items-center justify-center shrink-0 glow-primary">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">{certs[expandedIndex].title}</h3>
                  <p className="text-sm text-primary mb-3">{certs[expandedIndex].issuer}</p>
                  <p className="body-text">{certs[expandedIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificationsSection;
