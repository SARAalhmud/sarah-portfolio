import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
        >
          <h2 className="heading-display text-3xl mb-8">نبذة عني</h2>
          <div className="card-surface max-w-3xl">
            <p className="body-text text-lg leading-relaxed">
              طالبة في السنة الرابعة في هندسة البرمجيات بجامعة Başakşehir. مسيرتي بدأت بشغف حل المشكلات وتطورت من خلال تدريبات مكثفة في برنامج "1000 مبرمج" وشركة "الأنظمة المتجددة". أؤمن بأن البرمجيات ليست مجرد أكواد، بل هي أداة لتمكين المجتمعات وتسهيل حياة الناس.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
