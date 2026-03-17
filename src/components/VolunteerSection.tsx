import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const VolunteerSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="heading-display text-3xl mb-8">النشاط التطوعي</h2>
          <div className="card-surface max-w-2xl flex items-start gap-4">
            <div className="w-10 h-10 rounded-[12px] bg-accent/10 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">هاكاثون النساء للابتكار التقني</h3>
              <p className="body-text text-sm">
                المشاركة في تصميم وتطوير حلول تقنية مبتكرة تهدف إلى تمكين المرأة في مجال التكنولوجيا.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerSection;
