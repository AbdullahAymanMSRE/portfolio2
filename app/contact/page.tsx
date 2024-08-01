"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+20 115 350 90",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdullahaymanmsre@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "6th of October, Minya, Egypt",
  },
];
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  useEffect(() => {
    emailjs.init("KAPbEgk8iqF5cPB2f");
  }, []);

  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serviceId = "service_bjcd37o";
    const templateId = "template_e9vmutm";

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: `${formValues.firstname} ${formValues.lastname}`,
        from_email: formValues.email,
        message: formValues.message,
        phone: formValues.phone,
      });

      // show toast
      toast.success("I successfully received your message.");

      setFormValues({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-7 xl:flex-row">
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              className="flex flex-col gap-6 rounded-xl bg-[#27272c] p-10"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm always looking for new opportunities and collaborations.
                Feel free to reach out to me.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="firstname"
                  placeholder="Firstname"
                  value={formValues.firstname}
                  onChange={(v) =>
                    setFormValues((old) => ({
                      ...old,
                      firstname: v.target.value,
                    }))
                  }
                />
                <Input
                  type="lastname"
                  placeholder="Lastname"
                  value={formValues.lastname}
                  onChange={(v) =>
                    setFormValues((old) => ({
                      ...old,
                      lastname: v.target.value,
                    }))
                  }
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formValues.email}
                  onChange={(v) =>
                    setFormValues((old) => ({
                      ...old,
                      email: v.target.value,
                    }))
                  }
                />
                <Input
                  type="phone"
                  placeholder="Phone number"
                  value={formValues.phone}
                  onChange={(v) =>
                    setFormValues((old) => ({
                      ...old,
                      phone: v.target.value,
                    }))
                  }
                />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={formValues.message}
                onChange={(v) =>
                  setFormValues((old) => ({
                    ...old,
                    message: v.target.value,
                  }))
                }
              />

              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-6">
                  <div className="flex size-[52px] items-center justify-center rounded-md bg-[#27272c] text-accent xl:size-[72px]">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
