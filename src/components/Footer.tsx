import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "simplifyx@outlook.com",
    href: "mailto:simplifyx@outlook.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93700 48698",
    href: "tel:93700 48698",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Nagpur, Maharashatra",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/simplifyx",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/simplifyx",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/simplifyx" },
];

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "HMS", href: "#products" },
      { label: "CRM", href: "#products" },
      { label: "ERP", href: "#products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "#team" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer */}
        <motion.div
          className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand & Contact */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <a href="#" className="flex items-center gap-2 mb-6">
              <motion.div
                className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {/* <span className="text-primary-foreground font-bold text-lg">
                  M
                </span> */}
                <img
                  src="/simplifyX_favicon.png"
                  alt="SimplifyX"
                  width={40}
                  height={40}
                  className="rounded-md shadow-lg"
                />
              </motion.div>
              <span className="font-semibold text-xl tracking-tight">
                SimplifyX
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Simplifying technology with enterprise-grade software solutions
              built for the modern world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.value}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label={item.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((group) => (
            <motion.div key={group.title} variants={itemVariants}>
              <h4 className="font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} SimplifyX™. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
