import { Hammer, Leaf, Heart, PenTool } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "40+" },
    { label: "Happy Customers", value: "2000+" },
    { label: "Handmade", value: "100%" },
    { label: "Passion", value: "100%" },
  ];

  const features = [
    {
      icon: <Hammer className="w-8 h-8 text-primary" />,
      title: "German Craftsmanship",
      desc: "Generations of experience and precision in every piece.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "Sustainability",
      desc: "Wood from certified, sustainable European forests.",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passion",
      desc: "Every piece of furniture is crafted with attention to detail.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Custom Made",
      desc: "Individual solutions perfectly tailored to your wishes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-secondary text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <p className="uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] md:text-xs mb-4 text-primary font-bold">
            About Us
          </p>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 text-secondary-foreground leading-tight">
            Tradition Meets Modern <br className="hidden md:block" />{" "}
            Craftsmanship
          </h2>
          {/* Popravljeno: max-w je sada 100% na mobilnom, a 60% na desktopu */}
          <p className="max-w-full md:max-w-[70%] lg:max-w-[60%] text-base md:text-lg mx-auto leading-relaxed text-muted-foreground">
            Since 1985, we have been crafting high-quality wooden furniture in
            our workshop in the heart of Germany. What began as a small
            carpentry shop has grown into a renowned atelier for custom
            furniture pieces that last for generations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-start bg-primary-foreground p-6 md:p-8 h-full rounded-lg border border-transparent hover:border-gray-100 transition-all shadow-sm">
              <div className="mb-4 bg-secondary rounded-full p-3 md:p-4 flex items-center justify-center">
                {f.icon}
              </div>

              <div className="md:min-h-[60px] flex items-center mb-2">
                <h3 className="text-lg md:text-xl font-bold tracking-tight leading-tight">
                  {f.title}
                </h3>
              </div>

              <div className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center bg-primary-foreground mt-8 md:mt-16 rounded-xl p-6 md:p-12 shadow-sm">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-serif mb-4 md:mb-6 italic">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-4 md:mb-6 italic text-sm md:text-base leading-relaxed">
              &quot;Founded by master carpenter Hans Müller, our workshop has
              evolved into one of the leading ateliers for custom wooden
              furniture in Germany. Today, the third generation continues the
              legacy.&quot;
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              We combine traditional craftsmanship techniques with modern
              design, placing the greatest emphasis on quality, sustainability,
              and customer satisfaction.
            </p>
          </div>

          {/* Stats Grid - Smanjen padding na mobilnom */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-8 bg-[#FDFBF7] p-6 md:p-12 rounded-lg border border-gray-50">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-4xl font-serif text-[#D4A373] mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
