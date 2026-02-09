import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    name: string;
    description: string;
    price: bigint;
}
export interface Appointment {
    id: bigint;
    date: string;
    name: string;
    createdAt: Time;
    time: string;
    selectedService: Service;
    phone: string;
}
export type Time = bigint;
export interface backendInterface {
    bookAppointment(name: string, phone: string, serviceName: string, date: string, time: string): Promise<bigint>;
    getAllAppointments(): Promise<Array<Appointment>>;
    getAppointment(id: bigint): Promise<Appointment>;
    getServices(): Promise<Array<Service>>;
}
