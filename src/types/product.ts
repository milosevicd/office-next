export type Product = {
  id: string;
  code: string;
  name: string;
  description: string;
  referenceManufacturers: string;
  price: number;
  isActive: boolean;
  type: string;
};

export const sampleProducts: Product[] = [
  {
    id: "1",
    code: "LAPTOP-001",
    name: "ProBook X1",
    description: "High-performance laptop with 16GB RAM",
    referenceManufacturers: "TechCorp",
    price: 1299.99,
    isActive: true,
    type: "Electronics"
  },
  {
    id: "2",
    code: "PHONE-002",
    name: "SmartPhone Plus",
    description: "5G enabled smartphone with dual camera",
    referenceManufacturers: "Mobiletech",
    price: 799.99,
    isActive: true,
    type: "Electronics"
  },
  {
    id: "3",
    code: "WATCH-003",
    name: "FitWatch Pro",
    description: "Smart fitness tracker with heart rate monitor",
    referenceManufacturers: "WearableTech",
    price: 199.99,
    isActive: true,
    type: "Wearables"
  },
  {
    id: "4",
    code: "TABLET-004",
    name: "TabletPro 12",
    description: "12-inch tablet with stylus support",
    referenceManufacturers: "TechCorp",
    price: 599.99,
    isActive: false,
    type: "Electronics"
  },
  {
    id: "5",
    code: "AUDIO-005",
    name: "WirelessBuds",
    description: "Noise-cancelling wireless earbuds",
    referenceManufacturers: "AudioTech",
    price: 149.99,
    isActive: true,
    type: "Audio"
  }
];

