import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import useScrollToTop from "@/hooks/useScrollToTop";
import {
  Search,
  Filter,
  Star,
  Heart,
  ShoppingCart,
  Grid3X3,
  List,
  Zap,
  X,
  Info,
  Check
} from "lucide-react";

const Shop = () => {
  useScrollToTop();

  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showCartMessage, setShowCartMessage] = useState(false);
  const [cartMessage, setCartMessage] = useState("");

  // Add pagination state
  const [displayedCount, setDisplayedCount] = useState(12); // Show 12 products initially
  const PRODUCTS_PER_LOAD = 12; // Load 12 more each time

  const { addToCart } = useCart();
  const { convertPrice } = useCurrency();

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setDisplayedCount(12); // Reset displayed count when category changes
    if (categoryId === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  // Reset displayed count when search term changes
  useEffect(() => {
    setDisplayedCount(12);
  }, [searchTerm]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const closeModal = () => {
    setShowProductModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    if (product.inStock) {
      addToCart({
        id: product.id,
        name: product.name,
        price: convertPrice(product.price),
        image: product.image
      });

      setCartMessage(`Added to cart`);
      setShowCartMessage(true);

      setTimeout(() => {
        setShowCartMessage(false);
      }, 3000);
    }
  };

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + PRODUCTS_PER_LOAD);
  };
   const [categories, setCategories] = useState([]);
   useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories")
      .then((res) => res.json())
      .then((data) => {
      // Add the "All Products" option manually at the start
      const allOption = { id: "all", category_name: "All Products" };
      setCategories([allOption, ...data]);
    })
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);
  // const categories = [
  //   { id: "all", name: "All Products" },
  //   { id: "Stem-Cell-&-detox", name: "Stem Cell & detox" },
  //   { id: "Natural-Supplements", name: "Natural Supplements" },
  //   { id: "Herbal-Coffee", name: "Herbal Coffee" },
  //   { id: "Toothpaste", name: "Toothpaste" },
  //   { id: "Combo-Packs", name: "Combo Packs" },
  // ];


  function getQueryParam(search, key) {
    return new URLSearchParams(search).get(key);
  }

  // const products = [
  //   {
  //     id: 1,
  //     name: "FAFORON ",
  //     price: "KSh 3,500",
  //     originalPrice: "KSh 4,100",
  //     image: "/src/images/Faforon box screen 15 HD.png",
  //     rating: 5.0,
  //     reviews: 346,
  //     badges: ["Bestseller",],
  //     category: "Stem-Cell-&-detox",
  //     description: [
  //       "100% organic blood builder",
  //       "Boosts Immune",
  //       "Energizes",
  //       "Rejuvenates cells",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Replaces dead cells and detoxifies the body."
  //     ],
  //     inStock: true

  //   },
  //   {
  //     id: 2,
  //     name: "SALUD EXTRA",
  //     price: "KSh 3,600",
  //     originalPrice: "KSh 4,200",
  //     image: "/src/images/Salud Box screen2 HD.png",
  //     rating: 4.9,
  //     reviews: 157,
  //     badges: ["Stem Cell"],
  //     category: "Stem-Cell-&-detox",
  //     description: [
  //       "Treats Chronic Inflammation",
  //       "Anti-tumour",
  //       "Diarrhea",
  //       "Protects The Liver against Toxins",
  //       "Supports Cardiovascular Health",
  //       "Alleviates Symptoms Of Asthma",
  //       "Purifies The Blood"
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 3,
  //     name: "Small FAFORON",
  //     price: "KSh 2,400",
  //     originalPrice: "KSh 3,200",
  //     image: "/src/images/Small Faforon Box screen HD.png",
  //     rating: 5.0,
  //     reviews: 142,
  //     badges: ["Detox",],
  //     category: "Stem-Cell-&-detox",
  //     description: [
  //       "100% organic blood builder",
  //       "Boosts Immune",
  //       "Energizes",
  //       "Rejuvenates cells",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Replaces dead cells and detoxifies the body."
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 4,
  //     name: "Small SALUD EXTRA",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 4,200",
  //     image: "/src/images/Small Salud box screen Hd.png",
  //     rating: 4.9,
  //     reviews: 105,
  //     badges: ["Stem Cell"],
  //     category: "Stem-Cell-&-detox",
  //     description: [
  //       "Treats Chronic Inflammation",
  //       "Anti-tumour",
  //       "Diarrhea",
  //       "Protects The Liver against Toxins",
  //       "Supports Cardiovascular Health",
  //       "Alleviates Symptoms Of Asthma",
  //       "Purifies The Blood"
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 5,
  //     name: "SPIDEX 12",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 12 Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 55,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "Improve Vision",
  //       "Treat Eye Inflammation",
  //       "Reduces Redness and Swelling Due to Eye Infections",
  //       "Protects The Eyes Against Macular Degeneration",
  //       "Treats Glaucoma & Cataracts",
  //       "Treats Eye Strain",
  //       "Reduces Retinal Hemorrhage In Diabetic Retinopathy."
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 21,
  //     name: "FAFORON, SALUD & SPIDEX 19",
  //     price: "KSh 8,600",
  //     originalPrice: "KSh 9,900",
  //     image: "/src/images/Faforon Salud Spidex 19 Box screen HD.png",
  //     rating: 5.0,
  //     reviews: 96,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "This unique combination effectively treats existing kidney stones and prevents future formations.",
  //       "Ensuring optimal kidney health",
  //       "Faforon – Supports kidney function and flushes out toxins",
  //       "Salud – Helps dissolve stones and reduces pain",
  //       "Spidex 19 – Prevents recurrence with natural stone-fighting properties",
  //       "Get fast relief, long-term protection",
  //       "Manages Cancer",
  //       "Reduces Cramp",
  //       "Improve urinary health with this unbeatable combo.",
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 7,
  //     name: "SPIDEX 15",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 15 Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 45,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "Blood Sugar Remedy",
  //       "Improves digestive health",
  //       "Supports insulin production naturally",
  //       "Protects against nerve damage in diabetes",
  //       "Reduces neuropathic or nerve pain",
  //       "May boost nitric oxide production and vascular health",
  //       "Reduces chronic low level inflammation within the body."
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 20,
  //     name: "FAFORON, SPIDEX 21 & PROSCLICK ",
  //     price: "KSh 8,000",
  //     originalPrice: "KSh 9,100",
  //     image: "/src/images/combo 21, prosclick, Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 92,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "Prostrate Cancer/Enlargement.",
  //       "Ensuring optimal kidney health",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Helps Prevent Complications Of Prostate Surgery",
  //       "Boosts Testosterone Level In Men",
  //       "Prevents Kidney and Bladder Stones",
  //       "Reduces chronic low level inflammation within the body.",
  //       "Improves digestive health",
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 8,
  //     name: "SPIDEX 17",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 17 Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 42,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "Aids The Ovaries To Release Mature Eggs At Ovulation",
  //       "Prevents Recurrent Miscarriages",
  //       "Treats Painful Menstruation/ Dysmenorrhoea",
  //       "Supports Healthy Monthly Cycles",
  //       "Alleviates Menopausal Symptoms",
  //       "Night Sweats & Headaches",
  //       "Improves Overall Blood Circulation In Women",
  //       "Treat Urinary Tract Infections In Women",
  //       "Alleviate Skin Problems Like Acne & Eczema.",
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 9,
  //     name: "SPIDEX 18",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 18 Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 64,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "Remedy For Impotency",
  //       "Corrects Premature Ejaculation",
  //       "Improves Endurance & Resistance To Stress",
  //       "Supports Normal Blood Sugar Levels",
  //       "Treats Parkinson",
  //       "Corrects Erectile Dysfunction",
  //       "Anti-Aging",
  //       "Boosts Sperm Count And Motility",
  //       "Supports Optimal Testosterone Levels",
  //       "Treats Inflammation Of The Testis",
  //       "Enhances Male Stamina, Mood And Performance",
  //       "Natural Energy Booster. "
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 22,
  //     name: "FAFORON & SALUD",
  //     price: "KSh 6,500",
  //     originalPrice: "KSh 9,900",
  //     image: "/src/images/combo  Salud, Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 96,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "This unique combination effectively treats existing kidney stones and prevents future formations.",
  //       "Ensuring optimal kidney health",
  //       "Faforon – Supports kidney function and flushes out toxins",
  //       "Salud – Helps dissolve stones and reduces pain",
  //       "Get fast relief, long-term protection",
  //       "Manages Cancer",
  //       "Reduces crises or pain for sicklers.",
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 23,
  //     name: "FAFORON & SPIDEX 15",
  //     price: "KSh 5,000",
  //     originalPrice: "KSh 5,900",
  //     image: "/src/images/combo 15 Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 96,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "Treats Type 2 Diabetes.",
  //       "Ensuring optimal kidney health",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Get fast relief, long-term protection",
  //       "Reduces chronic low level inflammation within the body.",
  //       "Improves digestive health",
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 25,
  //     name: "FAFORON & SPIDEX 19",
  //     price: "KSh 5,000",
  //     originalPrice: "KSh 5,900",
  //     image: "/src/images/combo 19 Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 96,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "Hepatitis",
  //       "Gonorrhea",
  //       "Syphilis",
  //       "Human Papillomavirus (HPV)",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Get fast relief, long-term protection",
  //       "Reduces chronic low level inflammation within the body.",
  //       "Treats Ulcer",
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 10,
  //     name: "SPIDEX 19",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 19 Box screen HD.png",
  //     rating: 5.0,
  //     reviews: 78,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: ["(ANTIBIOTIC) Remedy for Bacterial Vaginosis (BV)",
  //       "Chlamydia",
  //       "Genital Herpes",
  //       "Hepatitis",
  //       "Gonorrhea",
  //       "Syphilis",
  //       "Human Papillomavirus (HPV)",
  //       "Pelvic Inflammatory Disease (PID)",
  //       "Urinary Tract Infections (UTI)."
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 33,
  //     name: "FAFORON, SALUD, SPIDEX 19 & PROSCLICK ",
  //     price: "KSh 10,800",
  //     originalPrice: "KSh 12,700",
  //     image: "/src/images/combo 19, prosclick, salud, Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 96,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "Prostrate Cancer/Enlargement.",
  //       "Ensuring optimal kidney health",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Helps Prevent Complications Of Prostate Surgery",
  //       "Boosts Testosterone Level In Men",
  //       "Prevents Kidney and Bladder Stones",
  //       "Reduces chronic low level inflammation within the body.",
  //       "Improves digestive health",
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 11,
  //     name: "SPIDEX 20",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 20 Box view Hd.png",
  //     rating: 5.0,
  //     reviews: 82,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "Boosts Libido",
  //       "Enhances Sexual Performance",
  //       "Aids Fertility",
  //       "Promotes Healthy Cervical Fluid",
  //       "Alleviates Chest Pain",
  //       "Enhances Liver Function",
  //       "Normalizes Menstrual Disorder",
  //       "Supports Brain Function",
  //       "Balances Hormones."
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 26,
  //     name: "FAFORON, FAFOR DITOZ & GREEN TEA",
  //     price: "KSh 8,100",
  //     originalPrice: "KSh 9,100",
  //     image: "/src/images/combo fafo ditoz, Green tea, faforon box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 96,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "Treats Type 2 Diabetes.",
  //       "Ensuring optimal kidney health",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Get fast relief, long-term protection",
  //       "Reduces chronic low level inflammation within the body.",
  //       "Improves digestive health",
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 12,
  //     name: "SPIDEX 21",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 21 Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 98,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "MEN SEXUAL HEALTH",
  //       "Skyrocket your confidence as a man",
  //       "Boosts Libido",
  //       "Enhances Male Fertility",
  //       "Rockets Erection",
  //       "Boosts Sperm Quality",
  //       "Supports Prostate Health",
  //       "Helps Improve Memory",
  //       "Supports Brain Function",
  //       "Improves Stress Resistance",
  //       "Alleviates Waist Pain",
  //       "Energizes & Aids Blood Circulation",
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 13,
  //     name: "FAFOR DITOZ",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Fafo Ditoz Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 33,
  //     badges: ["Detox",],
  //     category: "Stem-Cell-&-detox",
  //     description: [
  //       "Helps the body to naturally eliminating harmful substances through the kidneys",
  //       "Liver",
  //       "Digestive system",
  //       "Skin, and lungs. ",
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 27,
  //     name: "FAFORON & FAFOR DITOZ ",
  //     price: "KSh 5,000",
  //     originalPrice: "KSh 6,300",
  //     image: "/src/images/combo fafo ditoz, faforon box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 36,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "Treats Type 2 Diabetes.",
  //       "Ensuring optimal kidney health",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Get fast relief, long-term protection",
  //       "Reduces chronic low level inflammation within the body.",
  //       "Improves digestive health",
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 14,
  //     name: "PROSCLICK",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Prosclick Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 39,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "Promotes Healthy Prostate",
  //       "Supports Healthy Urinary Function",
  //       "Cleansing & Detoxification Of The Kidney",
  //       "Helps Prevent Complications Of Prostate Surgery",
  //       "Boosts Testosterone Level In Men",
  //       "Prevents Kidney and Bladder Stones",
  //       "Helps To Treat Prostate Disorders (BPH, Prostatitis & Prostate Cancer)",
  //       "Treats Urinary tract Infections-Cystitis."
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 18,
  //     name: "BECOOL",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Becool box screen1 Hd.png",
  //     rating: 5.0,
  //     reviews: 57,
  //     badges: ["Premium",],
  //     category: "Natural-Supplements",
  //     description: [
  //       "Strengthens Immunity",
  //       "Rich in Vitamin C",
  //       "Restores Low Iron Levels",
  //       "Aids Fertility, Reduces Tiredness And Fatigue",
  //       "Supports Good Energy Levels",
  //       "Improves Mental Performance, Improves Athletic Performance."
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 28,
  //     name: "FAFORON, SPIDEX 19 & 20",
  //     price: "KSh 8,000",
  //     originalPrice: "KSh 9,100",
  //     image: "/src/images/combo 20, 19 Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 41,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "Hepatitis",
  //       "Gonorrhea",
  //       "Syphilis",
  //       "Human Papillomavirus (HPV)",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Aids Fertility",
  //       "Promotes Healthy Cervical Fluid",
  //       "Alleviates Chest Pain",
  //       "Enhances Liver Function",
  //       "Corrects Dysmenorrhea - Painful Menstruation",
  //       "Reduces chronic low level inflammation within the body.",
  //       "Treats Ulcer",
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 74,
  //     name: "SPIDEX 12",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Spidex 12 Box screen Hd.png",
  //     rating: 4.7,
  //     reviews: 113,
  //     badges: ["Popular"],
  //     category: "Natural-Supplements",
  //     description: "Natural immune system support with vitamin C and herbal extracts",
  //     inStock: false
  //   },
  //   {
  //     id: 15,
  //     name: "MEN COFFEE",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Men Coffee Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 52,
  //     badges: ["Premium",],
  //     category: "Herbal-Coffee",
  //     description: [
  //       "Enhances Libido",
  //       "Promotes Erection",
  //       "Improves Sexual Performance",
  //       "Nourishes Prostate",
  //       "Promotes Blood Circulation",
  //       "Improves Body Vitality",
  //       "Relieves Fatigue."
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 29,
  //     name: "FAFORON, MEN COFFEE, SPIDEX 18 & 21 ",
  //     price: "KSh 10,500",
  //     originalPrice: "KSh 11,900",
  //     image: "/src/images/combo 21, 18, Men Coffee Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 97,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "MEN SEXUAL HEALTH",
  //       "Skyrocket your confidence as a man",
  //       "Boosts Libido",
  //       "Enhances Male Fertility",
  //       "Rockets Erection",
  //       "Boosts Sperm Quality",
  //       "Supports Prostate Health",
  //       "Helps Improve Memory",
  //       "Supports Brain Function",
  //       "Improves Stress Resistance",
  //       "Alleviates Waist Pain",
  //       "Energizes & Aids Blood Circulation",
  //     ],
  //     inStock: true
  //   },
  //   {
  //     id: 16,
  //     name: "GREEN COFFEE",
  //     price: "KSh 2,800",
  //     originalPrice: "KSh 3,500",
  //     image: "/src/images/Green Tea Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 58,
  //     badges: ["Premium",],
  //     category: "Herbal-Coffee",
  //     description: [
  //       "Accelerates Fat Burning",
  //       "Promotes Anti-fatigue",
  //       "Suppresses Appetite",
  //       "Controls Weight ",
  //       "Improves Body Vitality",
  //       "Relieves Fatigue."
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 32,
  //     name: "FAFORON, SPIDEX 21 & 19",
  //     price: "KSh 8,000",
  //     originalPrice: "KSh 9,100",
  //     image: "/src/images/combo 21, 19 Faforon Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 91,
  //     badges: ["Discount",],
  //     category: "Combo-Packs",
  //     description: [
  //       "MEN SEXUAL HEALTH",
  //       "Prevents premature ejaculation",
  //       "Boosts Libido",
  //       "Enhances Male Fertility",
  //       "Rockets Erection",
  //       "Boosts Sperm Quality",
  //       "Supports Prostate Health",
  //       "Helps Improve Memory",
  //       "Supports Brain Function",
  //       "Improves Stress Resistance",
  //       "Alleviates Waist Pain",
  //       "Energizes & Aids Blood Circulation",
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 17,
  //     name: "FAFORLIFE TOOTHPASTE ",
  //     price: "KSh 1,800",
  //     originalPrice: "KSh 2,400",
  //     image: "/src/images/Faforlife Toothpaste Box screen Hd.png",
  //     rating: 5.0,
  //     reviews: 57,
  //     badges: ["Premium",],
  //     category: "Toothpaste",
  //     description: [
  //       "Multi Effect Toothpaste",
  //       "Fresh Breath",
  //       "Cavity Protection",
  //       "Anti-inflammatory",
  //       "Healthy Gums."
  //     ],
  //     inStock: true
  //   },

  //   {
  //     id: 37,
  //     name: "2 FAFORON CARTONS ",
  //     price: "KSh 150,000",
  //     originalPrice: "KSh 168,000",
  //     image: "/src/images/Combo 2 Cartons.png",
  //     rating: 5.0,
  //     reviews: 346,
  //     badges: ["Best",],
  //     category: "Stem-Cell-&-detox",
  //     description: [
  //       "48 Bottles of 100% organic blood builder",
  //       "Boosts Immune",
  //       "Energizes",
  //       "Rejuvenates cells",
  //       "Restores cells",
  //       "Repairs cells",
  //       "Replicates cells",
  //       "Replaces dead cells and detoxifies the body."
  //     ],
  //     inStock: true

  //   },

  //   // Add more products...
  // ];
   const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products") // Your Laravel API
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((item) => ({
          id: item.id,
          name: item.productName,
          price: `KSh ${item.productPrice}`,
          originalPrice: `KSh ${item.oldProductPrice}`,
          image: `http://127.0.0.1:8000/product_images/${item.productImage}`,
          rating: 5.0, // or item.rating if you store it
          reviews: 100, // or item.reviews if you store it
          badges: ["Bestseller"], // can be dynamic later
          benefits: item.productBenefits ? item.productBenefits.split(",") : [],
          description: item.productDescription
            ? item.productDescription.split(",").map((d: string) => d.trim()) // split and trim spaces
            : [],
          category: item.category?.category_name || "General",
          inStock: item.productQuantity > 0,
        }));
        setProducts(formatted);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Products" || product.category == selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get products to display based on current pagination
  const displayedProducts = filteredProducts.slice(0, displayedCount);
  const hasMoreProducts = displayedCount < filteredProducts.length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {showCartMessage && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
            <Check className="h-5 w-5 animate-bounce" />
            <span className="font-medium">{cartMessage}</span>
          </div>
        </div>
      )}

      <main className="pt-20">
        <section className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/src/videos/yellow-dill-flower-in-the-wind-in-nature.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center space-y-0">
            <h1 className="text-4xl sm:text-5xl font-bold font-sora text-white drop-shadow-2xl">
              Shop <span className="text-gradient-primary">Premium</span> Herbal Products
            </h1>
            <p className="text-l text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
              Discover our full range of clinically-tested herbal supplements trusted by healthcare professionals.
            </p>

            {selectedCategory !== "all" && (
              <div className="flex justify-center">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 backdrop-blur-sm">
                  Category: {categories.find(cat => cat.id === selectedCategory)?.name}
                </Badge>
              </div>
            )}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 space-y-2">
              <div className="space-y-1">
                <h3 className="font-semibold">Search Products</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Categories
                </h3>
                <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.category_name)}
                      className={`flex-shrink-0 lg:w-full text-left p-3 rounded-xl transition-smooth whitespace-nowrap ${selectedCategory === category.category_name
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary hover:bg-secondary/80"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{category.category_name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    Showing {displayedProducts.length} of {filteredProducts.length} products
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className={`grid gap-4 ${viewMode === "grid"
                  ? "grid-cols-2 md:grid-cols-2 xl:grid-cols-3"
                  : "grid-cols-1"
                }`}>
                {displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`card-neon group cursor-pointer ${viewMode === "list" ? "flex gap-3 items-start p-4" : ""
                      }`}
                    onClick={() => handleProductClick(product)}
                  >
                    <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 flex-shrink-0 ${viewMode === "list" ? "w-24 h-24 sm:w-32 sm:h-32" : "mb-4"
                      }`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`object-cover group-hover:scale-110 transition-transform duration-500 ${viewMode === "list" ? "w-full h-full" : "w-full h-36 sm:h-48"
                          }`}
                      />

                      <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                        {product.badges.slice(0, 2).map((badge) => (
                          <Badge
                            key={badge}
                            className={`text-xs px-2 py-1 ${badge === "Bestseller" ? "bg-primary text-primary-foreground" :
                                badge === "New" ? "bg-accent text-accent-foreground" :
                                  badge === "Premium" ? "bg-gradient-primary text-primary-foreground" :
                                    "bg-secondary text-secondary-foreground"
                              }`}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>

                      {!product.inStock && (
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                          <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
                        </div>
                      )}

                      <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-background/80 backdrop-blur-sm w-8 h-8"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Heart className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="absolute bottom-2 right-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-primary/80 text-primary-foreground backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8"
                        >
                          <Info className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    <div className={`flex flex-col justify-between min-w-0 ${viewMode === "list" ? "flex-1 h-24 sm:h-32" : "space-y-1.5"
                      }`}>
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`${viewMode === "list" ? "h-2.5 w-2.5" : "h-2.5 w-2.5"
                                } ${i < Math.floor(product.rating)
                                  ? "fill-primary text-primary"
                                  : "text-muted-foreground"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`font-semibold group-hover:text-primary transition-smooth break-words line-clamp-2 ${viewMode === "list" ? "text-xs" : "text-xs leading-tight"
                          }`}>
                          {product.name}
                        </h3>
                      </div>

                      <div className={`${viewMode === "list" ? "space-y-1" : "pt-2 border-t border-border"
                        }`}>
                        <div className="mb-2">
                          <div className="flex flex-wrap items-center gap-1">
                            <span className={`font-bold text-primary break-words ${viewMode === "list" ? "text-xs" : "text-sm"
                              }`}>
                              {convertPrice(product.price)}
                            </span>
                            <span className="text-xs text-muted-foreground line-through">
                              {convertPrice(product.originalPrice)}
                            </span>
                          </div>
                        </div>

                        <Button
                          className={`w-full btn-neon group ${viewMode === "list" ? "text-xs py-1 px-2 h-6" : "text-xs py-2 h-9"
                            }`}
                          disabled={!product.inStock}
                          onClick={(e) => handleAddToCart(product, e)}
                        >
                          <ShoppingCart className={`group-hover:animate-bounce ${viewMode === "list" ? "h-3 w-3 mr-1" : "h-3 w-3 mr-1"
                            }`} />
                          <span className="truncate">
                            {viewMode === "list" ? "Add" : (product.inStock ? "Add to Cart" : "Out of Stock")}
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Conditional Load More Button - Only show if there are more products */}
              {hasMoreProducts && (
                <div className="text-center pt-8">
                  <Button
                    className="btn-ghost-neon"
                    onClick={handleLoadMore}
                  >
                    Load More Products
                    <Zap className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {showProductModal && selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <Button variant="ghost" size="icon" onClick={closeModal}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-80 object-cover"
                      />

                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {selectedProduct.badges.map((badge) => (
                          <Badge
                            key={badge}
                            className={`text-xs px-2 py-1 ${badge === "Bestseller" ? "bg-primary text-primary-foreground" :
                                badge === "New" ? "bg-accent text-accent-foreground" :
                                  badge === "Premium" ? "bg-gradient-primary text-primary-foreground" :
                                    "bg-secondary text-secondary-foreground"
                              }`}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(selectedProduct.rating)
                                ? "fill-primary text-primary"
                                : "text-muted-foreground"
                              }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-medium">{selectedProduct.rating}</span>
                      <span className="text-muted-foreground">({selectedProduct.reviews} reviews)</span>
                    </div>

                    <div>
                      <Badge variant="outline">
                        {categories.find(cat => cat.id === selectedProduct.category)?.name}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">Product Benefits</h3>
                      <div className="text-muted-foreground leading-relaxed space-y-2">
                        {Array.isArray(selectedProduct.description) ? (
                          selectedProduct.description.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="text-green-500 font-bold">✓</span>
                              <span>{benefit}</span>
                            </div>
                          ))
                        ) : (
                          <p className="whitespace-pre-line">{selectedProduct.description}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl font-bold text-primary">
                          {convertPrice(selectedProduct.price)}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {convertPrice(selectedProduct.originalPrice)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">Incl. VAT & Shipping</p>
                    </div>

                    <div>
                      {selectedProduct.inStock ? (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="destructive">Out of Stock</Badge>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        className="flex-1 btn-neon"
                        disabled={!selectedProduct.inStock}
                        onClick={() => {
                          handleAddToCart(selectedProduct, { stopPropagation: () => { } });
                          closeModal();
                        }}
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>

                      <Button variant="outline" size="icon">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Shop;