
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef(); // مرجع للفورم لاستخدامه مع EmailJS
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // ربط القيم الثلاثة التي وجدناها في حسابك
    emailjs.sendForm(
      'service_1ihun4i', // Service ID الخاص بكِ
      'template_crs4eet', // استبدليها بـ Template ID من موقعهم
      form.current,
      'mXYLR84AiuF1tqkxn'   // استبدليها بـ Public Key من إعدادات حسابك
    )
    .then((result) => {
        setSent(true);
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
    }, (error) => {
        setLoading(false);
        alert("حدث خطأ في الإرسال، حاولي مرة أخرى.");
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-display text-3xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            تواصل معي
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <input
                name="user_name"
                type="text"
                placeholder="الاسم"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-[12px] bg-card px-4 py-3 text-foreground outline-none ring-1 ring-border focus:ring-primary transition-all hover:ring-purple-400/50"
              />
              <input
                name="user_email"
                type="email"
                placeholder="البريد الإلكتروني"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-[12px] bg-card px-4 py-3 text-foreground outline-none ring-1 ring-border focus:ring-primary transition-all hover:ring-purple-400/50"
              />
              <textarea
                name="message"
                placeholder="رسالتك"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-[12px] bg-card px-4 py-3 text-foreground outline-none ring-1 ring-border focus:ring-primary transition-all hover:ring-purple-400/50 resize-none"
              />
              <button 
                type="submit" 
                disabled={loading}
                className={`btn-primary w-full flex justify-center items-center gap-2 ${sent ? 'bg-green-500' : 'bg-gradient-to-r from-purple-600 to-cyan-600'}`}
              >
                <Send className={`w-4 h-4 ${loading ? 'animate-bounce' : ''}`} />
                {loading ? "جاري الإرسال..." : sent ? "تم الإرسال بنجاح ✨" : "إرسال الرسالة"}
              </button>
            </form>

            <div className="space-y-6">
              <p className="body-text text-muted-foreground leading-relaxed">
                يسعدني دائماً سماع أفكاركم ومناقشة فرص العمل. تواصلوا معي وسأقوم بالرد خلال 24 ساعة. 
              </p>
              <div className="space-y-4">
                <a href="mailto:saraalhamoud9@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" /> saraalhamoud9@gmail.com 
                </a>
                <a href="https://github.com/SARAalhmud" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-purple-400 transition-colors">
                  <Github className="w-5 h-5" /> GitHub 
                </a>
                <a href="https://www.linkedin.com/in/sara-al-hamoud" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-blue-500 transition-colors">
                  <Linkedin className="w-5 h-5" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;