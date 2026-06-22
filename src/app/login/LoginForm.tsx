"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

interface LoginData {identifier:string;password:string;}

export default function LoginForm(){
  const router = useRouter();
  const [showPwd,setShowPwd] = useState(false);
  const [loading,setLoading] = useState(false);
  const {register,handleSubmit,formState:{errors}} = useForm<LoginData>();

const onSubmit = async (data:LoginData)=>{
  setLoading(true);
  try {
    const res = await fetch("/api/auth/login",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (res.ok && json.success){
      const { token, user } = json.data;
      localStorage.setItem("token",token);
      localStorage.setItem("user",JSON.stringify(user));
      document.cookie = `token=${token};path=/; max-age=86400`;
      const redirectTo =
      user.role === "admin" ? "/admin" : "/dashboard";
      toast.success("Login successful!");
      setTimeout(() => {
        router.replace(redirectTo);
      }, 500);
    } else {
      toast.error(json.message || "Invalid credentials");
    }
  } catch (err){
    console.log(err);
    toast.error("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="form-label">Mobile Number / Email</label>
        <input
          {...register("identifier",{required:"This field is required"})}
          className="form-input"
          placeholder="+91 98765 43210 or email@example.com"
        />
        {errors.identifier && <p className="text-red-500 text-xs mt-1">{errors.identifier.message}</p>}
      </div>
      <div>
        <label className="form-label">Password</label>
        <div className="relative">
          <input
            {...register("password", {required:"Password is required"})}
            type={showPwd ? "text" : "password"}
            className="form-input pr-10"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPwd(!showPwd)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
      </div>
      <p className="text-right">
        <span className="text-xs text-blue-600 cursor-pointer hover:underline">Forgot Password?</span>
      </p>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-3 text-sm rounded-xl disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign In →"}
      </button>
      <p className="text-center text-sm text-slate-400 pt-1">
        Don&apos;t have an account?{""}
        <Link href="/signup" className="text-blue-600 font-medium hover:underline">Register here</Link>
      </p>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"/>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs text-slate-400">or</span>
        </div>
      </div>
      <Link
        href="/admin"
        className="flex justify-center items-center gap-2 btn-outline w-full py-2.5 text-sm rounded-xl no-underline"
      >
        🔑 Continue as Admin
      </Link>
    </form>
  );
}
