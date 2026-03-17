import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";

const typewriterTexts = [
  "متخصصة في تطوير الويب (Full-Stack)",
  "باستخدام React و Laravel",
  "أحول الأفكار إلى واقع رقمي فعال",
];

const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const };

const CodeIllustration = () => (
  <div className="relative w-full max-w-md">
    <div className="card-surface p-5 font-mono text-sm leading-relaxed overflow-hidden" dir="ltr">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-destructive/60" />
        <span className="w-3 h-3 rounded-full bg-accent/60" />
        <span className="w-3 h-3 rounded-full bg-primary/60" />
      </div>
      <pre className="text-muted-foreground text-xs md:text-sm">
        <code>
          <span className="text-accent">const</span>{" "}
          <span className="text-primary">buildSolution</span>
          {" = (idea) => {\n"}
          {"  "}
          <span className="text-accent">const</span> stack = [
          <span className="text-primary">'React'</span>,{" "}
          <span className="text-primary">'Laravel'</span>];{"\n"}
          {"  "}
          <span className="text-accent">const</span> quality ={" "}
          <span className="text-primary">'production-ready'</span>;{"\n\n"}
          {"  "}
          <span className="text-accent">return</span> {"{"}
          {"\n"}
          {"    "}code: <span className="text-primary">clean</span>,{"\n"}
          {"    "}tests: <span className="text-primary">automated</span>,{"\n"}
          {"    "}result: <span className="text-accent">✨</span>{"\n"}
          {"  "}{"};\n"}
          {"};"}
        </code>
      </pre>
    </div>
    {/* Glow effect behind the card */}
    <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
  </div>
);

const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typewriterTexts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentFullText.length) {
            setCurrentText(currentFullText.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(currentFullText.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % typewriterTexts.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
          >
            <div className="inline-flex items-center gap-2 badge-tech-solid mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm">متاحة للعمل</span>
            </div>

            <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl mb-6">
              سارة أحمد الحمود
            </h1>
            <p className="text-foreground text-lg md:text-xl mb-2">
              مهندسة برمجيات شغوفة ببناء حلول ذكية
            </p>
            <p className="text-primary text-lg md:text-xl mb-10 h-8">
              {currentText}
              <span className="animate-blink text-accent">|</span>
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <a href="#projects" className="btn-primary">
                <ArrowDown className="w-4 h-4" />
                عرض أعمالي
              </a>
            
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            <CodeIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
