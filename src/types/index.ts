// ─── User & Auth ───────────────────────────────────────────────────────────────
export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: "male" | "female" | "other";
  role: "patient" | "admin";
  patientId: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

// ─── Reports ──────────────────────────────────────────────────────────────────
export type ReportStatus = "pending" | "processing" | "completed";

export interface ReportParameter {
  name: string;
  value: string;
  unit: string;
  normalRange: string;
  status: "normal" | "high" | "low";
  percentile?: number;
}

export interface Report {
  _id: string;
  reportId: string;
  patientId: string;
  patientName: string;
  testName: string;
  testCategory: TestCategory;
  status: ReportStatus;
  collectionDate: string;
  reportDate?: string;
  doctor: string;
  parameters?: ReportParameter[];
  pdfUrl?: string;
  notes?: string;
  createdAt: string;
}

// ─── Tests ────────────────────────────────────────────────────────────────────
export type TestCategory =
  | "cbc"
  | "thyroid"
  | "liver"
  | "kidney"
  | "diabetes"
  | "vitamin"
  | "lipid"
  | "fullbody"
  | "other";

export interface TestType {
  id: TestCategory;
  name: string;
  description: string;
  parameters: number;
  price: number;
  icon: string;
  color: string;
  bgColor: string;
  turnaround: string;
}

// ─── Appointments ─────────────────────────────────────────────────────────────
export type CollectionType = "home" | "lab";

export interface Appointment {
  _id: string;
  patientName: string;
  phone: string;
  email?: string;
  testType: string;
  collectionType: CollectionType;
  preferredDate: string;
  preferredTime: string;
  address?: string;
  notes?: string;
  status: "booked" | "confirmed" | "completed" | "cancelled";
  createdAt: string;
}

// ─── Dashboard Stats ──────────────────────────────────────────────────────────
export interface DashboardStats {
  totalReports: number;
  completedReports: number;
  processingReports: number;
  pendingReports: number;
  abnormalCount: number;
}

// ─── Admin Stats ──────────────────────────────────────────────────────────────
export interface AdminStats {
  totalPatients: number;
  totalReports: number;
  todayAppointments: number;
  pendingReports: number;
  reportsThisMonth: number;
}

// ─── API Responses ────────────────────────────────────────────────────────────
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
