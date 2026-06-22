import mongoose, { Document, Schema } from "mongoose";

export interface IReport extends Document {
  reportId: string;
  patientId: string;
  patientName: string;
  testName: string;
  testCategory: string;
  status: "pending" | "processing" | "completed";
  collectionDate: string;
  reportDate?: string;
  doctor: string;
  parameters?: Array<{
    name: string;
    value: string;
    unit: string;
    normalRange: string;
    status: "normal" | "high" | "low";
    percentile?: number;
  }>;
  pdfUrl?: string;
  notes?: string;
  createdAt: Date;
}

const ParameterSchema = new Schema({
  name: String,
  value: String,
  unit: String,
  normalRange: String,
  status: { type: String, enum: ["normal", "high", "low"], default: "normal" },
  percentile: Number,
});

const ReportSchema = new Schema<IReport>(
  {
    reportId: { type: String, unique: true, required: true },
    patientId: { type: String, required: true, index: true },
    patientName: { type: String, required: true },
    testName: { type: String, required: true },
    testCategory: { type: String, required: true },
    status: { type: String, enum: ["pending", "processing", "completed"], default: "pending" },
    collectionDate: { type: String, required: true },
    reportDate: String,
    doctor: { type: String, default: "Pending" },
    parameters: [ParameterSchema],
    pdfUrl: String,
    notes: String,
  },
  { timestamps: true }
);

export const Report =
  mongoose.models.Report || mongoose.model<IReport>("Report", ReportSchema);
