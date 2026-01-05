import { Building2, Users, BarChart3, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const products = [
  {
    id: "hms",
    name: "HMS",
    fullName: "Hospital Management System",
    description: "Comprehensive facility management with patient records, scheduling, billing, and analytics all in one platform.",
    icon: Building2,
    features: ["Patient Management", "Appointment Scheduling", "Billing & Insurance", "Analytics Dashboard"],
  },
  {
    id: "crm",
    name: "CRM",
    fullName: "Customer Relationship Management",
    description: "Streamline client relationships, track interactions, and improve service delivery with intelligent insights.",
    icon: Users,
    features: ["Contact Management", "Lead Tracking", "Communication History", "Automated Workflows"],
  },
  {
    id: "erp",
    name: "ERP",
    fullName: "Enterprise Resource Planning",
    description: "Unify your business operations with integrated resource planning, inventory management, and financial controls.",
    icon: BarChart3,
    features: ["Resource Planning", "Inventory Control", "Financial Management", "Supply Chain"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="max-w-2xl mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
            Our Products
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Enterprise Solutions
            <br />
            <span className="text-muted-foreground">Built for Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our suite of products is designed to meet the complex needs of modern businesses.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-foreground/20 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Icon */}
              <motion.div 
                className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <product.icon className="w-6 h-6" />
              </motion.div>

              {/* Content */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{product.name}</h3>
                  <span className="text-xs text-muted-foreground font-mono">{product.fullName}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {product.features.map((feature, index) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-1 h-1 rounded-full bg-foreground" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="ghost" className="group/btn p-0 h-auto font-medium">
                Learn More
                <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
