export const mockHostels = [
  {
    id: 1,
    slug: "shree-sawaria-house",
    name: "Shree Sawaria House",
    image: "/hostels/sawariya01.jpeg",
    location: "B-46, Ansal Golf Link-1, Near Pari Chowk, Greater Noida",
    price: 8500, // Starting price
    rating: 4.9,
    gender: "Unisex",
    distance: "500m from Pari Chowk Metro",
    description: "Shree Sawaria House is a quiet and welcoming space designed especially for male residents. Nestled near the bustling Pari Chowk, it blends convenience with community. Whether you are a student or a professional, our rooms reflect comfort and functionality.",
    
    // Media for the Swiper
    gallery: [
       { type: 'image', url: "/hostels/sawariya01.jpeg" },
      { type: 'image', url: "/hostels/sawariya02.jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.23.52 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.23.53 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.23.56 PM (2).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.00 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.03 PM.jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.02 PM.jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.02 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.02 PM (1).jpeg" },
      { type: 'image', url: "/hostels/WhatsApp Image 2026-05-13 at 2.24.01 PM (3).jpeg" },

      
    ],

    // Detailed Amenities Categories
    amenities: [
      { name: "24/7 Security", icon: "Shield" },
      { name: "CCTV Cameras", icon: "Camera" },
      { name: "Air Conditioned", icon: "Wind" },
      { name: "High Speed Wi-Fi", icon: "Wifi" },
      { name: "24/7 Canteen", icon: "Coffee" },
      { name: "Elevator", icon: "ArrowUp" },
      { name: "Library & Hall", icon: "BookOpen" },
      { name: "Gym", icon: "Dumbbell" },
      { name: "Laundry Service", icon: "Waves" },
      { name: "Stationary Shop", icon: "PenTool" },
      { name: "Pick & Drop", icon: "Bus" },
      { name: "RO Water", icon: "Droplets" },
    ],

    // Nearby Institutions for Greater Noida
    institutions: [
      "Galgotias University (15 mins)",
      "Sharda University (10 mins)",
      "G.L. Bajaj Institute (8 mins)",
      "Bennett University (20 mins)",
      "Knowledge Park II & III (5 mins)"
    ],

    // Room Types
    occupancy: ["Private", "Twin Sharing"],

    // Reviews
    reviews: [
      { user: "Amit Kumar", rating: 5, comment: "The food is very hygienic and the 24/7 canteen is a lifesaver for late-night studies." },
      { user: "Vikram Singh", rating: 4, comment: "Best connectivity to Pari Chowk. The library environment is very peaceful." },
      { user: "Sandeep J.", rating: 5, comment: "Excellent placement support and very helpful maintenance staff." }
    ]
  },
 {
  id: 2,
  slug: "shree-shyam-hostels",
  name: "Shree Shyam Hostels",
  image: "/hostels/shreeshyam1.jpeg", // Replace with your local image
  location: "CD-59, Ansal Golf Link-1, Near Pari Chowk, Greater Noida",
  price: 7500, // Update with actual pricing if available
  rating: 4.8,
  gender: "Boys & Girls",
  distance: "150m from Knowledge Park II Metro",
  description:
    "Shree Shyam Hostels offers premium hostel and PG accommodation for students and working professionals in Greater Noida. Designed with comfort, safety, and affordability in mind, the hostel provides modern rooms, hygienic meals, high-speed internet, and excellent connectivity to major universities and educational institutions.",

  gallery: [
    { type: "image", url: "/hostels/shreeshyam1.jpeg" },
    { type: "image", url: "/hostels/shreeshyam2.jpeg" },
    { type: "image", url: "/hostels/shreeshyam3.jpeg" },
    { type: "image", url: "/hostels/shreeshyam4.jpeg" },
    { type: "image", url: "/hostels/shreeshyam5.jpeg" },
  ],

  amenities: [
    { name: "High-Speed Wi-Fi", icon: "Wifi" },
    { name: "Daily Hygienic Meals", icon: "Utensils" },
    { name: "Fully Furnished Rooms", icon: "BedDouble" },
    { name: "24/7 Power Backup", icon: "BatteryCharging" },
    { name: "24/7 Hot Water", icon: "Droplets" },
    { name: "CCTV Security", icon: "Camera" },
    { name: "Security Staff", icon: "Shield" },
    { name: "College Pick & Drop", icon: "Bus" },
    { name: "TV Lounge", icon: "Tv" },
    { name: "Laundry Service", icon: "Shirt" },
    { name: "Regular Housekeeping", icon: "Sparkles" },
    { name: "Professional Management", icon: "Users" }
  ],

  institutions: [
    "Galgotias College (300m)",
    "NIET (500m)",
    "GLBITM (1 km)",
    "Sharda University (1 km)",
    "Knowledge Park II Metro (150m)",
    "Pari Chowk (200m)"
  ],

  occupancy: [
    "Single Sharing",
    "Double Sharing",
    "Triple Sharing",
    "Deluxe Room"
  ],

  reviews: [
    {
      user: "Priya Singh",
      rating: 5,
      comment:
        "Living at Shree Shyam has been one of the best decisions I made. The rooms are spacious, internet is fast, and the meals are delicious."
    },
    {
      user: "Aman Kumar",
      rating: 5,
      comment:
        "Great location, affordable, and excellent management. The community here is supportive and friendly."
    },
    {
      user: "Neha Patel",
      rating: 5,
      comment:
        "Perfect blend of comfort and affordability. The facilities are top-notch and the security team is always vigilant."
    },
    {
      user: "Arjun Verma",
      rating: 5,
      comment:
        "Couldn't ask for a better place. The study environment is peaceful, and the support from the management is exceptional."
    },
    {
      user: "Sneha Gupta",
      rating: 5,
      comment:
        "Clean, safe, and well-located. I love the common areas where we can hang out with friends and study together."
    }
  ]
},
{
    id: 3,
    slug: "shree-sawaria-house-girls-hostel",
    name: "Shree Sawaria House - Girls hostel",
    image: "/hostels/sawariya01.jpeg",
    location: "B-46, Ansal Golf Link-1, Near Pari Chowk, Greater Noida",
    price: 8500, // Starting price
    rating: 4.9,
    gender: "Girls",
    distance: "500m from Pari Chowk Metro",
    description: "Shree Sawaria House is a quiet and welcoming space designed especially for male residents. Nestled near the bustling Pari Chowk, it blends convenience with community. Whether you are a student or a professional, our rooms reflect comfort and functionality.",
    
    // Media for the Swiper
    gallery: [
      { type: 'image', url: "/hostels/shreeswariya2.jpeg" },
      { type: 'image', url: "/hostels/shreeswariya3.jpeg" },
      { type: 'image', url: "/hostels/shreeswariya4.jpeg" },
      { type: 'image', url: "/hostels/shreeswariya5.jpeg" },
      { type: 'image', url: "/hostels/shreeswariya1.jpeg" },
      // { type: 'video', url: "/hostels/shreeswariya6.jpeg" },
      // { type: 'video', url: "/hostels/shreeswariya7.jpeg" },
      // { type: 'video', url: "/hostels/shreeswariya8.jpeg" },
     
      
    ],

    // Detailed Amenities Categories
    amenities: [
      { name: "24/7 Security", icon: "Shield" },
      { name: "CCTV Cameras", icon: "Camera" },
      { name: "Air Conditioned", icon: "Wind" },
      { name: "High Speed Wi-Fi", icon: "Wifi" },
      { name: "24/7 Canteen", icon: "Coffee" },
      { name: "Elevator", icon: "ArrowUp" },
      { name: "Library & Hall", icon: "BookOpen" },
      { name: "Gym", icon: "Dumbbell" },
      { name: "Laundry Service", icon: "Waves" },
      { name: "Stationary Shop", icon: "PenTool" },
      { name: "Pick & Drop", icon: "Bus" },
      { name: "RO Water", icon: "Droplets" },
    ],

    // Nearby Institutions for Greater Noida
    institutions: [
      "Galgotias University (15 mins)",
      "Sharda University (10 mins)",
      "G.L. Bajaj Institute (8 mins)",
      "Bennett University (20 mins)",
      "Knowledge Park II & III (5 mins)"
    ],

    // Room Types
    occupancy: ["Private", "Twin Sharing"],

    // Reviews
    reviews: [
      { user: "Amit Kumar", rating: 5, comment: "The food is very hygienic and the 24/7 canteen is a lifesaver for late-night studies." },
      { user: "Vikram Singh", rating: 4, comment: "Best connectivity to Pari Chowk. The library environment is very peaceful." },
      { user: "Sandeep J.", rating: 5, comment: "Excellent placement support and very helpful maintenance staff." }
    ]
  },
  {
    id: 4,
    slug: "shree-sawaria-house-boys-hostel",
    name: "Shree Sawaria House - Boys hostel",
    image: "/hostels/shreeswariyaboys1.jpeg",
    location: "B-46, Ansal Golf Link-1, Near Pari Chowk, Greater Noida",
    price: 8500, // Starting price
    rating: 4.9,
    gender: "Boys",
    distance: "500m from Pari Chowk Metro",
    description: "Shree Sawaria House is a quiet and welcoming space designed especially for male residents. Nestled near the bustling Pari Chowk, it blends convenience with community. Whether you are a student or a professional, our rooms reflect comfort and functionality.",
    
    // Media for the Swiper
    gallery: [
      { type: 'image', url: "/hostels/shreeswariyaboys1.jpeg" },
      { type: 'image', url: "/hostels/shreeswariyaboys2.jpeg" },
      { type: 'image', url: "/hostels/shreeswariyaboys3.jpeg" },
      { type: 'image', url: "/hostels/shreeswariyaboys4.jpeg" },
      { type: 'image', url: "/hostels/shreeswariyaboys5.jpeg" },
      { type: 'image', url: "/hostels/shreeswariyaboys6.jpeg" },
      // { type: 'video', url: "/hostels/shreeswariya7.jpeg" },
      // { type: 'video', url: "/hostels/shreeswariya8.jpeg" },
     
      
    ],

    // Detailed Amenities Categories
    amenities: [
      { name: "24/7 Security", icon: "Shield" },
      { name: "CCTV Cameras", icon: "Camera" },
      { name: "Air Conditioned", icon: "Wind" },
      { name: "High Speed Wi-Fi", icon: "Wifi" },
      { name: "24/7 Canteen", icon: "Coffee" },
      { name: "Elevator", icon: "ArrowUp" },
      { name: "Library & Hall", icon: "BookOpen" },
      { name: "Gym", icon: "Dumbbell" },
      { name: "Laundry Service", icon: "Waves" },
      { name: "Stationary Shop", icon: "PenTool" },
      { name: "Pick & Drop", icon: "Bus" },
      { name: "RO Water", icon: "Droplets" },
    ],

    // Nearby Institutions for Greater Noida
    institutions: [
      "Galgotias University (15 mins)",
      "Sharda University (10 mins)",
      "G.L. Bajaj Institute (8 mins)",
      "Bennett University (20 mins)",
      "Knowledge Park II & III (5 mins)"
    ],

    // Room Types
    occupancy: ["Private", "Twin Sharing"],

    // Reviews
    reviews: [
      { user: "Amit Kumar", rating: 5, comment: "The food is very hygienic and the 24/7 canteen is a lifesaver for late-night studies." },
      { user: "Vikram Singh", rating: 4, comment: "Best connectivity to Pari Chowk. The library environment is very peaceful." },
      { user: "Sandeep J.", rating: 5, comment: "Excellent placement support and very helpful maintenance staff." }
    ]
  },
];