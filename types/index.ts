export type ServiceType =
  | "cleaning"
  | "delivery"
  | "gardening"
  | "repairs"
  | "errands"
  | "carwash";

export interface RequestFormData {
  service: ServiceType;
  location: string;
  date: string;
  duration: string;
  name: string;
  phone: string;
}

export interface WorkerFormData {
  name: string;
  phone: string;
  area: string;
  services: ServiceType[];
  availability: string;
}
