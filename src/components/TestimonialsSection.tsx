import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" data-aos="fade-up" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">💬 Testimonials</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            What mentors and colleagues say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card-glow glass-effect p-8 rounded-xl hover-lift relative"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />
              
              <div className="mb-6">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-16 h-16 object-contain rounded-lg"
                />
              </div>

              <blockquote className="text-muted-foreground mb-6 italic relative z-10">
                "{testimonial.quote}"
              </blockquote>

              <div className="border-t border-border/50 pt-4">
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                <p className="text-sm text-primary">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
