"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface ContactData { name: string; contact: string; message: string; }

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm<ContactData>();

  const onSubmit = async (data: ContactData) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    toast.success("Message sent! We'll reply within 2 hours.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <label className="form-label">Your Name</label>
        <input {...register("name", { required: true })} className="form-input" placeholder="Full name" />
      </div>
      <div>
        <label className="form-label">Phone or Email</label>
        <input {...register("contact", { required: true })} className="form-input" placeholder="+91 98765 43210 or email" />
      </div>
      <div>
        <label className="form-label">Message</label>
        <textarea {...register("message", { required: true })} className="form-input resize-none" rows={3} placeholder="Your message..." />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full py-2.5 text-sm rounded-xl disabled:opacity-60">
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
