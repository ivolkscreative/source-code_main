"use client";
import ContactPageComponent from "@/components/pages/ContactPageComponent";
import Footer from "@/components/section/Footer";
import { useEffect, useRef, useState } from "react";

export default function ContactPage() {
  const [scrolling, setScrolling] = useState(false);
  const [purpose, setPurpose] = useState("");
  const [commentMessage, setCommentMessage] = useState("");
  const commentMessageRef = useRef(null);

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
    setPurpose(selectedPurpose);

    let templateMessage = "";
    switch (selectedPurpose) {
      case "just_say_hello":
        templateMessage = "Hello, let's Talk";
        break;
      case "career_inquires":
        templateMessage = "Be part of iVolks";
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

    if (commentMessageRef.current) {
      commentMessageRef.current.value = templateMessage;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    window.location.reload();

    // const body = {
    //   firstName: formData.firstName,
    //   lastName: formData.lastName,
    //   email: formData.email,
    //   purpose: purpose,
    //   commentMessage: commentMessage,
    // };

    // try {
    //   const res = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   });

    //   if (res.ok) {
    //     console.log("Success");
    //   } else {
    //     console.log("Error");
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
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
          handleSubmit: handleSubmit,
        }}
      />
      <Footer />
    </main>
  );
}
