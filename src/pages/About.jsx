import { Layout } from "@/components/layout/Layout";
import { Award, Heart, Leaf, Users } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We meticulously curate every product, ensuring exceptional quality and craftsmanship in every piece.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We're committed to eco-friendly practices and partner with brands that share our vision for a sustainable future.",
  },
  {
    icon: Heart,
    title: "Customer Love",
    description:
      "Your satisfaction is our priority. We go above and beyond to create memorable shopping experiences.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in building connections and fostering a community of like-minded individuals who appreciate quality.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-6">
              Our Story
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meet's Store was founded with a simple mission: to bring premium,
              thoughtfully designed products to people who appreciate quality and
              style in their everyday lives.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
                alt="Our store"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-display font-semibold mb-6">
                Curating Excellence Since 2020
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  What started as a passion project has grown into a destination for
                  those who seek premium products without compromise. We believe that
                  the things we surround ourselves with should be both beautiful and
                  functional.
                </p>
                <p>
                  Every item in our collection is hand-picked by our team of curators
                  who travel the world in search of exceptional craftsmanship, timeless
                  design, and sustainable practices. We partner with artisans and brands
                  who share our values and commitment to excellence.
                </p>
                <p>
                  Our goal is simple: to help you discover products that enhance your
                  daily life and stand the test of time. Quality over quantity, always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-foreground text-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold mb-4">
              Our Values
            </h2>
            <p className="text-background/70 max-w-2xl mx-auto">
              These principles guide everything we do, from product selection to
              customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-xl bg-background/5"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-background/70 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Meet's Store who work tirelessly to bring
              you the best.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Meet Patel",
                role: "Founder & CEO",
                image: "https://static.vecteezy.com/system/resources/thumbnails/049/174/246/small/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg",
              },
              {
                name: "Sakshi Shah",
                role: "Head of Curation",
                image: "https://img.freepik.com/free-photo/indian-satisfied-woman-clapping-hands-feeling-proud-milestone_482257-122316.jpg?semt=ais_hybrid&w=740&q=80",
              },
              {
                name: "Kuldeep Singh",
                role: "Creative Director",
                image: "https://static.vecteezy.com/system/resources/thumbnails/048/817/564/small/confident-young-professional-standing-in-urban-street-during-bright-daylight-photo.jpeg",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-lg">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
