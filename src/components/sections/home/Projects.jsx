import FadeInSection from "../../common/FadeInSection";

const specialtyServices = [
  {
    id: "digital-comm",
    category: "Business Coaching",
    title: "Digital Communication",
    description:
      "Social Media Marketing, Digital Advertising, Social Media Monitoring, Social Media Management, Personal Branding Digital, Remarketing Digital, Creative & Content Creator.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
    href: "#contact",
  },
  {
    id: "event-mice",
    category: "Management",
    title: "Event Management / MICE",
    description:
      "Event Management / MICE (Event Organizer Seminar, Workshop, Launching Product, Grand/Soft Launching, Company Event, Family Gathering, Expo dan Bazar including booth).",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop",
    href: "#contact",
  },
  {
    id: "research-consulting",
    category: "Starting a Business",
    title: "Research & Consulting",
    description:
      "Survei Pasar & Audience, Media Monitoring Terpadu, serta Digital Consultancy untuk mendukung pertumbuhan bisnis Anda.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop",
    href: "#contact",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeInSection className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Fokus & Keahlian
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
            Specialty Solutions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-medium">
            Pendekatan strategis yang terstruktur untuk membantu brand Anda
            tumbuh secara akseleratif dan berkelanjutan.
          </p>
        </FadeInSection>

        {/* 3 Columns Grid */}
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {specialtyServices.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden"
              >
                <div>
                  {/* Image Container with Zoom Effect */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-8 space-y-4">
                    {/* Category Tag */}
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-navy-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action / Contact Button */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-navy-900 bg-slate-100 hover:bg-navy-900 hover:text-white rounded-full transition-all duration-300 shadow-sm"
                  >
                    <span>Contact Us</span>
                    <svg
                      className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
