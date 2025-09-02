"use client";
import ContactPageComponent from "@/components/pages/ContactPageComponent";
import Footer from "@/components/section/Footer";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [scrolling, setScrolling] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);

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
      if (window.emailjs) {
        window.emailjs.init('0NXaKIF4666w0Vw7X');
        setEmailJSLoaded(true);
        console.log('EmailJS loaded and initialized');
      }
    };
    script.onerror = () => {
      console.error('Failed to load EmailJS');
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Test API endpoint saat component mount
  useEffect(() => {
    const testAPI = async () => {
      try {
        const response = await fetch('/api/contact', {
          method: 'GET'
        });
        if (response.ok) {
          const data = await response.json();
          console.log('API endpoint working:', data);
        } else {
          console.warn('API endpoint returned:', response.status);
        }
      } catch (error) {
        console.warn('API endpoint test failed:', error);
      }
    };
    
    testAPI();
  }, []);

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

    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      purpose: formData.purpose,
      commentMessage: formData.comment_message, // Gunakan formData.comment_message
    };

    let apiSuccess = false;
    let emailJSSuccess = false;

    try {
      // Method 1: Coba API route terlebih dahulu
      console.log('Trying API route...');
      
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('API route success:', data);
        apiSuccess = true;
      } else {
        console.log('API route failed with status:', res.status);
        const errorData = await res.json().catch(() => ({ error: 'Unknown error' }));
        console.log('API error data:', errorData);
      }
    } catch (apiError) {
      console.log('API route error:', apiError.message);
    }

    // Method 2: EmailJS sebagai backup (atau primary jika API gagal)
    if (emailJSLoaded && window.emailjs) {
      try {
        console.log('Trying EmailJS...');
        
        const emailResult = await window.emailjs.send(
          'service_jf0b1ed',
          'template_oe27k8g',
          {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            purpose: formData.purpose,
            message: formData.comment_message, // Gunakan formData.comment_message
            reply_to: formData.email
          }
        );
        
        console.log('EmailJS success:', emailResult);
        emailJSSuccess = true;
      } catch (emailError) {
        console.error('EmailJS error:', emailError);
      }
    } else {
      console.warn('EmailJS not loaded or not available');
    }

    // Evaluasi hasil
    if (apiSuccess || emailJSSuccess) {
      let successMessage = "Thanks for reaching out! We will get back to you soon.";
      
      setSubmitMessage(successMessage);
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        purpose: "",
        comment_message: "",
      });
    } else {
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
          emailJSLoaded: emailJSLoaded,
        }}
      />
      <Footer />
    </main>
  );
}