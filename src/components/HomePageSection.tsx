import { motion } from "motion/react";
import { ReactNode } from "react";

interface HomePageSectionProps {
  children: ReactNode;
  id?: string;
}

const HomePageSection = ({ children, id }: HomePageSectionProps) => {
  return (
    <section className="relative p-16" id={id}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, bounce: 0 }}
        className="flex justify-start"
      >
        <img
          src="/images/flower-frame.png"
          alt=""
          className="h-12 w-12 rotate-270"
        />
      </motion.div>
      <div className="p-8 lg:p-16">{children}</div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, bounce: 0 }}
        className="flex justify-end"
      >
        <img
          src="/images/flower-frame.png"
          alt=""
          className="h-12 w-12 rotate-90"
        />
      </motion.div>
    </section>
  );
};

export default HomePageSection;
