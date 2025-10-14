"use client";
import ContactPageComponent from "@/components/pages/ContactPageComponent";
import Footer from "@/components/section/Footer";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [scrolling, setScrolling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
    comment_message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePurposeChange = (event) => {
    const selectedPurpose = event.target.value;

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

    setFormData({
      ...formData,
      purpose: selectedPurpose,
      comment_message: templateMessage,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitMessage("");

    // Validasi client-side
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.purpose || !formData.comment_message) {
      setSubmitError("Please fill all of these forms");
      setIsSubmitting(false);
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitError("Invalid Email Format");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          purpose: formData.purpose,
          commentMessage: formData.comment_message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitMessage("Thanks for reaching out! We will get back to you soon.");
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          purpose: "",
          comment_message: "",
        });
      } else {
        setSubmitError(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitError("Failed to send message. Please try again or contact us directly.");
    }

    setIsSubmitting(false);
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
          handlePurposeChange: handlePurposeChange,
          handleChange: handleChange,
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