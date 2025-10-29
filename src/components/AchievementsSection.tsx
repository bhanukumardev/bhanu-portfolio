import { achievements } from "@/data/achievements";
import { ExternalLink } from "lucide-react";

export const AchievementsSection = () => {
  const awards = achievements.filter(a => a.category === 'award');
  const internships = achievements.filter(a => a.category === 'internship');
  const academic = achievements.filter(a => a.category === 'academic');

  return (
    <section id="achievements" data-aos="fade-up" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">🏆 Achievements & Recognition</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            National awards, internships, and academic excellence
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-primary">Awards & Honors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((achievement, index) => (
              <div
                key={achievement.id}
                className="card-glow glass-effect p-6 rounded-xl hover-lift"
                data-aos="fade-up"
                data-aos-delay={`${index * 90}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={achievement.logo}
                    alt={achievement.title}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {achievement.description}
                </p>
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                >
                  View Credential <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Achievements */}
        {academic.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-primary">Academic Excellence</h3>
            <div className="grid grid-cols-1 gap-6">
              {academic.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="card-glow glass-effect p-6 rounded-xl hover-lift"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 90}`}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={achievement.logo}
                      alt={achievement.title}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {achievement.description}
                      </p>
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
                      >
                        View Details <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Internships */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-primary">Professional Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internships.map((achievement, index) => (
              <div
                key={achievement.id}
                className="card-glow glass-effect p-6 rounded-xl hover-lift text-center"
                data-aos="fade-up"
                data-aos-delay={`${index * 90}`}
              >
                <img
                  src={achievement.logo}
                  alt={achievement.title}
                  className="w-20 h-20 object-contain rounded-lg mx-auto mb-4"
                />
                <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
