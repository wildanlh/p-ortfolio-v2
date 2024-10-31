import { About } from "@/components/sections/About";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { Projects } from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ScrollLink from "@/components/testLink";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
    </Layout>
  );
}
