import { ExternalLink } from "lucide-react";
import { delay, motion } from "framer-motion";

const founders = [
  {
    name: "Sameer Nimje",
    role: "CTO & Founder",
    portfolio: "https://sameerx.in/",
    initials: "SN",
  },
  {
    name: "Sam Thool",
    role: "CEO & Founder",
    portfolio: "https://www.linkedin.com/in/samyak-thool/",
    initials: "ST",
  },
];

const partners = [
  {
    name: "Partnership Opportunity",
    role: "HMS Product Partner",
    portfolio: "",
    initials: "HP",
    available: true,
  },
  {
    name: "Partnership Opportunity",
    role: "CRM Product Partner",
    portfolio: "",
    initials: "CP",
    available: true,
  },
  {
    name: "Partnership Opportunity",
    role: "ERP Product Partner",
    portfolio: "",
    initials: "EP",
    available: true,
  },
  {
    name: "Partnership Opportunity",
    role: "Sales & Marketing Partner",
    portfolio: "",
    initials: "SP",
    available: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const TeamSection = () => {
  return (
    <section id="team" className="py-24 md:py-32 ">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Meet the People
            <br />
            <span className="text-muted-foreground">Behind SimplifyX</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A diverse team of experts passionate about transforming businesses
            through technology.
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          className="mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Leadership</h3>
          <motion.div
            className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {founders.map((member) => (
              <motion.a
                key={member.name}
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card border-2 border-primary/50 rounded-2xl p-6 flex items-center gap-5 hover:border-primary transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Avatar */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-primary-foreground font-semibold text-lg">
                    {member.initials}
                  </span>
                </motion.div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg truncate">
                      {member.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">
                    {member.role}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Partners Section */}
        <motion.div
          className="text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Product Partners
          </h3>
          <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
            We’re seeking entrepreneurial partners to drive product sales and
            share in the profits.
          </p>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={`${partner.role}-${index}`}
                className="group relative bg-card border border-dashed border-border rounded-2xl p-6 flex flex-col items-center text-center hover:border-foreground/30 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* Avatar */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-muted-foreground font-semibold text-lg">
                    {partner.initials}
                  </span>
                </motion.div>

                {/* Info */}
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1">
                    {partner.role}
                  </p>
                  <span className="inline-block text-xs text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                    Open Position
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Interested in partnering with us?{" "}
            <a
              href="#contact"
              className="text-primary hover:underline font-medium"
            >
              Get in touch
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
// import { ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";

// const team = [
//   {
//     name: "Sameer Nimje",
//     role: "CTO & Founder",
//     portfolio: "https://sameerx.in/",
//     initials: "SN",
//   },
//   {
//     name: "Sam Thool",
//     role: "CEO & Co Founder",
//     portfolio: "https://www.linkedin.com/in/samyak-thool/",
//     initials: "ST",
//   },
//   {
//     name: "Under Cover",
//     role: "Software Developer",
//     portfolio: "https://www.linkedin.com",
//     initials: "AG",
//   },
//   {
//     name: "Under Cover",
//     role: "Planner and Designing",
//     portfolio: "https://www.linkedin.com",
//     initials: "SA",
//   },
//   {
//     name: "Seat Available",
//     role: "Sales Manager",
//     portfolio: "",
//     initials: "PS",
//   },
//   {
//     name: "Seat Available",
//     role: "Marketing And Advertising",
//     portfolio: "",
//     initials: "SA",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.4,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// const headerVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1] as const,
//     },
//   },
// };

// export const TeamSection = () => {
//   return (
// <section id="team" className="py-24 md:py-32 bg-secondary/50">
//   <div className="container mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           className="text-center max-w-2xl mx-auto mb-16"
//           variants={headerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
//             Our Team
//           </p>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
//             Meet the People
//             <br />
//             <span className="text-muted-foreground">Behind SimplifyX</span>
//           </h2>
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             A diverse team of experts passionate about transforming businesses
//             through technology.
//           </p>
//         </motion.div>

//         {/* Team Grid */}
//         <motion.div
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {team.map((member) => (
//             <motion.a
//               key={member.name}
//               href={member.portfolio}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative bg-card border border-border rounded-2xl p-6 flex items-center gap-5 hover:border-foreground/20 transition-colors duration-300"
//               variants={itemVariants}
//               whileHover={{ y: -4, transition: { duration: 0.2 } }}
//             >
//               {/* Avatar */}
//               <motion.div
//                 className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <span className="text-primary-foreground font-semibold text-lg">
//                   {member.initials}
//                 </span>
//               </motion.div>

//               {/* Info */}
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-2">
//                   <h3 className="font-semibold text-lg truncate">
//                     {member.name}
//                   </h3>
//                   <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
//                 </div>
//                 <p className="text-muted-foreground text-sm">{member.role}</p>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };
