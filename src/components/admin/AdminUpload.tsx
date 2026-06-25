"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Upload, FileUp } from "lucide-react";
import { TEST_CATEGORIES } from "@/lib/utils";

export default function AdminUpload() {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setUploading(false);
    toast.success("Report uploaded and patient notified!");
  };

  return (
    <div>
      <h1
        className="text-2xl font-bold text-slate-900 mb-1"
        style={{ fontFamily: "DM Serif Display, serif" }}
      >
        Upload Blood Report
      </h1>

      <p className="text-slate-400 text-sm mb-6">
        Add new patient reports to the portal
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="card p-6 space-y-4">
            <h3 className="font-semibold text-slate-800 text-sm">
              Patient & Test Details
            </h3>

            <div>
              <label className="form-label">Patient ID</label>
              <input
                className="form-input"
                placeholder="LP-00XXX or search by name"
              />
            </div>

            <div>
              <label className="form-label">Patient Name</label>
              <input
                className="form-input"
                placeholder="Full patient name"
              />
            </div>

            <div>
              <label className="form-label">Test Type</label>
              <select className="form-input">
                {TEST_CATEGORIES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="form-label">Collection Date</label>
                <input type="date" className="form-input" />
              </div>

              <div>
                <label className="form-label">Report Status</label>
                <select className="form-input">
                  <option>Pending</option>
                  <option>Processing</option>
                  <option>Completed</option>
                </select>
              </div>
            </div>

            <div>
              <label className="form-label">Reporting Pathologist</label>
              <select className="form-input">
                <option>Dr. A. Lalwani (MD Pathology)</option>
                <option>Dr. S. Mehra (MD Path)</option>
                <option>Dr. R. Kapoor (MD)</option>
              </select>
            </div>

            <div>
              <label className="form-label">Notes</label>
              <textarea
                className="form-input resize-none"
                rows={2}
                placeholder="Any special notes..."
              />
            </div>
          </div>

          {/* Upload + Notify */}
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="font-semibold text-slate-800 text-sm mb-4">
                Upload PDF Report
              </h3>

              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  toast.success("File received!");
                }}
                onClick={() => toast.success("File browser opened...")}
                className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                  dragging
                    ? "border-blue-400 bg-blue-50"
                    : "border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
              >
                <FileUp
                  className={`w-10 h-10 mx-auto mb-3 ${
                    dragging ? "text-blue-500" : "text-slate-300"
                  }`}
                />

                <p className="font-medium text-slate-700 text-sm mb-1">
                  Drop PDF here or click to browse
                </p>

                <p className="text-slate-400 text-xs">
                  PDF files up to 10MB
                </p>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="font-semibold text-slate-800 text-sm mb-4">
                Notify Patient
              </h3>

              <div className="space-y-2.5">
                {[
                  {
                    label: "Send SMS notification",
                    defaultChecked: true,
                  },
                  {
                    label: "Send Email with PDF",
                    defaultChecked: true,
                  },
                  {
                    label: "Send WhatsApp message",
                    defaultChecked: false,
                  },
                ].map(({ label, defaultChecked }) => (
                  <label
                    key={label}
                    className="flex items-center gap-2.5 text-sm text-slate-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={defaultChecked}
                      className="rounded"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="btn-primary w-full py-3 text-sm rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Upload className="w-4 h-4" />
              {uploading
                ? "Uploading..."
                : "Upload Report & Notify Patient"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}