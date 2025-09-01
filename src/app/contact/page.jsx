"use client";
import ContactPageComponent from "@/components/pages/ContactPageComponent";
import Footer from "@/components/section/Footer";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [scrolling, setScrolling] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const commentMessageRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
    comment_message: "",
  });

  // Load EmailJS script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      // Initialize EmailJS
      if (window.emailjs) {
        window.emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '0NXaKIF4666w0Vw7X');
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePurposeChange = (event) => {
    const selectedPurpose = event.target.value;
    setPurpose(selectedPurpose);

    let templateMessage = "";
    switch (selectedPurpose) {
      case "just_say_hello":
        templateMessage = "Hello, let's Talk";
        break;
      case "career_inquires":
        templateMessage = "Collaborate with us";
        break;
      case "screening_inquires":
        templateMessage = "Screening details";
        break;
      case "create_branded_video":
        templateMessage = "Create video production for every story";
        break;
      default:
        templateMessage = "";
    }

    setCommentMessage(templateMessage);
    setFormData({
      ...formData,
      purpose: selectedPurpose,
      comment_message: templateMessage,
    });

    if (commentMessageRef.current) {
      commentMessageRef.current.value = templateMessage;
    }
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setCommentMessage(value);
    setFormData({
      ...formData,
      comment_message: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitMessage("");

    // Validasi client-side
    if (!formData.firstName || !formData.lastName || !formData.email || !purpose || !commentMessage) {
      setSubmitError("Please fill all of these forms");
      setIsSubmitting(false);
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError("Inva;id Email Format");
      setIsSubmitting(false);
      return;
    }

    try {
      // Option 1: Menggunakan API route
      const body = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        purpose: purpose,
        commentMessage: commentMessage,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitMessage(data.message);
        
        // Option 2: Juga kirim via EmailJS untuk backup
        if (window.emailjs) {
          try {
            await window.emailjs.send(
              process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_jf0b1ed',
              process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_arkok4a',
              {
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.email,
                purpose: purpose,
                message: commentMessage,
                to_email: 'contact@yourcompany.com' // Ganti dengan email tujuan
              }
            );
            console.log('EmailJS sent successfully');
          } catch (emailError) {
            console.error('EmailJS error:', emailError);
          }
        }
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          purpose: "",
          comment_message: "",
        });
        setPurpose("");
        setCommentMessage("");
        if (commentMessageRef.current) {
          commentMessageRef.current.value = "";
        }
      } else {
        setSubmitError(data.error || "Error submitting the form.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitError("Server Error, please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20);
  };

  return (
    <main className="flex flex-col h-screen">
      <ContactPageComponent
        props={{
          scrolling: scrolling,
          scrollToTop: scrollToTop,
          formData: formData,
          purpose: purpose,
          commentMessage: commentMessage,
          commentMessageRef: commentMessageRef,
          handlePurposeChange: handlePurposeChange,
          handleChange: handleChange,
          handleCommentChange: handleCommentChange,
          handleSubmit: handleSubmit,
          isSubmitting: isSubmitting,
          submitMessage: submitMessage,
          submitError: submitError,
        }}
      />
      <Footer />
    </main>
  );
}