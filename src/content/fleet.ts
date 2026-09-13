export type FleetVehicle = {
  value: string;
  name: string;
  shortName: string;
  formDetail: string;
  formLabel?: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  pallets: string;
  payload: string;
  length: string;
  height: string;
  width: string;
  archWidth?: string;
  bestFor: string[];
  tailLiftCapacity?: string;
  sideLoading?: string;
  weatherProtection?: string;
  dark?: boolean;
};

export const fleetVehicles: FleetVehicle[] = [
  {
    value: "small_van",
    name: "Small Van",
    shortName: "Small",
    formDetail: "1 standard or Euro pallet / up to 400kg",
    description: "A nimble, cost-effective choice for urgent parcels, boxes and a single pallet.",
    image: "/fleet/Small Van.webp",
    imageWidth: 2752,
    imageHeight: 1536,
    pallets: "1 standard or Euro pallet",
    payload: "Up to 400kg",
    length: "1.5m",
    height: "1.0m",
    width: "1.4m",
    archWidth: "1.25m",
    bestFor: ["Documents & parcels", "Boxes & small parts", "Single-pallet loads"],
  },
  {
    value: "transit_van",
    name: "Transit Type Van",
    shortName: "Transit",
    formDetail: "2 standard or 3 Euro pallets / up to 900kg",
    description: "More room for multi-box consignments and palletised freight without moving up to a large van.",
    image: "/fleet/Transit Type Van.webp",
    imageWidth: 2752,
    imageHeight: 1536,
    pallets: "2 standard or 3 Euro pallets",
    payload: "Up to 900kg",
    length: "2.4m",
    height: "1.35m",
    width: "1.65m",
    archWidth: "1.25m",
    bestFor: ["Multiple boxes", "Trade equipment", "Small pallet runs"],
  },
  {
    value: "long_wheelbase_van",
    name: "Long Wheelbase Van",
    shortName: "LWB",
    formDetail: "3 standard or 4 Euro pallets / up to 1,200kg",
    description: "A dependable all-rounder for longer items, commercial stock and heavier pallet loads.",
    image: "/fleet/Long Wheelbase Van.webp",
    imageWidth: 2752,
    imageHeight: 1536,
    pallets: "3 standard or 4 Euro pallets",
    payload: "Up to 1,200kg",
    length: "3.2m",
    height: "1.8m",
    width: "1.75m",
    archWidth: "1.35m",
    bestFor: ["Commercial stock", "Long components", "3-pallet loads"],
  },
  {
    value: "extra_long_wheelbase_van",
    name: "Extra Long Wheelbase Van",
    shortName: "XLWB",
    formDetail: "4 standard or 5 Euro pallets / up to 1,100kg",
    description: "Maximum van space for long, bulky consignments and up to four standard pallets.",
    image: "/fleet/Extra Long Wheelbase Van.webp",
    imageWidth: 2752,
    imageHeight: 1536,
    pallets: "4 standard or 5 Euro pallets",
    payload: "Up to 1,100kg",
    length: "4.2m",
    height: "1.8m",
    width: "1.75m",
    archWidth: "1.35m",
    bestFor: ["Oversized items", "Event equipment", "4-pallet loads"],
  },
  {
    value: "luton_box_tail_lift",
    name: "Luton Box Van with Tail Lift",
    shortName: "Luton Box",
    formDetail: "Fully enclosed / 6 pallets / tail lift",
    formLabel: "Luton Van (Box, Tail Lift, 6 Pallets, 1,000 kg)",
    description: "A fully enclosed six-pallet Luton with a tail lift for safe, efficient rear loading and unloading.",
    image: "/fleet/van one (1).jpeg",
    imageWidth: 1536,
    imageHeight: 1024,
    pallets: "Up to 6",
    payload: "Approx. 1,000–1,200kg",
    length: "Approx. 4.0–4.1m",
    height: "Approx. 2.1–2.3m",
    width: "Approx. 2.0m",
    tailLiftCapacity: "Typically 500kg",
    sideLoading: "No",
    weatherProtection: "Fully enclosed",
    bestFor: ["Furniture", "Boxes & appliances", "Office goods", "Six-pallet loads"],
  },
  {
    value: "luton_curtain_tail_lift",
    name: "Curtain-Side Luton with Tail Lift",
    shortName: "Luton Curtain",
    formDetail: "Curtain side / 6 pallets / tail lift",
    formLabel: "Luton Van (Curtain Side, Tail Lift, 6 Pallets, 1,000 kg)",
    description: "A flexible six-pallet Luton combining side-loading access with a rear tail lift for bulky freight.",
    image: "/fleet/van one (2).jpeg",
    imageWidth: 1536,
    imageHeight: 1024,
    pallets: "Up to 6",
    payload: "Approx. 1,000–1,100kg",
    length: "Approx. 4.0–4.2m",
    height: "Approx. 2.2–2.3m",
    width: "Approx. 2.0–2.2m",
    tailLiftCapacity: "Typically 500kg",
    sideLoading: "Yes",
    weatherProtection: "Curtain-sided",
    bestFor: ["Pallets", "Machinery", "Construction equipment", "Event equipment"],
  },
];
