import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
  _honey?: string; // honeypot
};

// simple email regex for frontend validation (module scope so hooks don't need to include it in deps)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // simple email regex for frontend validation
  // real-time validation
  useEffect(() => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!emailRegex.test(formData.email)) e.email = "Enter a valid email";
    if (!formData.message.trim()) e.message = "Message is required";
    else if (formData.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    setErrors(e);
  }, [formData]);

  const hasErrors = () => Object.keys(errors).length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // final check
    if (formData._honey && formData._honey.trim() !== "") {
      // likely a bot
      toast.error("Failed to send message. Please try again.");
      return;
    }

    if (hasErrors()) {
      toast.error("Please fix validation errors before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "e3401362-a55c-4dc6-a2c7-b40aa6becf58",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // include honeypot field in case service uses it
          _honey: formData._honey,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", _honey: "" });
      } else {
        console.error("Web3Forms response:", data);
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto" aria-labelledby="contact-form-heading" data-aos="fade-up" data-aos-delay="80">
      <h2 id="contact-form-heading" className="sr-only">Contact form</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="bg-muted border-border focus:border-primary focus:ring focus:ring-primary/30"
          data-aos="fade-up"
          data-aos-delay="140"
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="bg-muted border-border focus:border-primary focus:ring focus:ring-primary/30"
          data-aos="fade-up"
          data-aos-delay="200"
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your Message (minimum 10 characters)"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          rows={6}
          className="bg-muted border-border focus:border-primary focus:ring focus:ring-primary/30 resize-none"
          data-aos="fade-up"
          data-aos-delay="260"
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot field - visually hidden but present for bots */}
      <div className="sr-only">
        <label htmlFor="_honey">Leave this field empty</label>
        <input
          id="_honey"
          name="_honey"
          value={formData._honey}
          onChange={(e) => setFormData({ ...formData, _honey: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-primary hover:shadow-glow"
        aria-live="polite"
        data-aos="zoom-in"
        data-aos-delay="320"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  );
};
