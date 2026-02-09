import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";

actor {
  type Service = {
    name : Text;
    price : Nat;
    description : Text;
  };

  type Appointment = {
    id : Nat;
    name : Text;
    phone : Text;
    selectedService : Service;
    date : Text;
    time : Text;
    createdAt : Time.Time;
  };

  module Appointment {
    public func compare(a1 : Appointment, a2 : Appointment) : Order.Order {
      Nat.compare(a1.id, a2.id);
    };
  };

  let appointments = Map.empty<Nat, Appointment>();
  var nextId = 0;

  // Default services list
  let services = List.fromArray<Service>([
    {
      name = "Standard Wash";
      price = 20;
      description = "Exterior wash and dry.";
    },
    {
      name = "Premium Wash";
      price = 40;
      description = "Includes standard wash plus interior cleaning and waxing.";
    },
    {
      name = "Interior Cleaning";
      price = 25;
      description = "Deep cleaning of seats, carpets, and dashboard.";
    },
  ]);

  public shared ({ caller }) func bookAppointment(
    name : Text,
    phone : Text,
    serviceName : Text,
    date : Text,
    time : Text,
  ) : async Nat {
    validateInputs(name, phone, serviceName, date, time);

    let service = findService(serviceName);
    let id = nextId;
    nextId += 1;

    let newAppointment : Appointment = {
      id;
      name;
      phone;
      selectedService = service;
      date;
      time;
      createdAt = Time.now();
    };

    appointments.add(id, newAppointment);
    id; // Return the confirmation/booking ID
  };

  public query ({ caller }) func getServices() : async [Service] {
    services.toArray();
  };

  func validateInputs(name : Text, phone : Text, service : Text, date : Text, time : Text) {
    if (name.size() == 0 or phone.size() == 0 or service.size() == 0) {
      Runtime.trap("All fields (name, phone, service, date, time) are required");
    };
    if (date.size() == 0 or time.size() == 0) { Runtime.trap("Date and time must be provided") };
  };

  func findService(serviceName : Text) : Service {
    switch (services.values().find(func(s) { s.name == serviceName })) {
      case (null) { Runtime.trap("Selected service not found") };
      case (?service) { service };
    };
  };

  public query ({ caller }) func getAppointment(id : Nat) : async Appointment {
    switch (appointments.get(id)) {
      case (?appointment) { appointment };
      case (null) { Runtime.trap("Appointment not found") };
    };
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray().sort();
  };
};
