"use client";

import { useState } from "react";
import { m } from 'framer-motion';
import emailjs from "@emailjs/browser";
import {
  CheckCircle2, ChevronRight, Phone, MessageCircle,
  Shirt, MapPin, Settings, Scissors, PackageCheck, Building2, User,
  Award, Factory, Users, Truck, HelpCircle, Layers
} from "lucide-react";

const SectionHeader = ({ num, title, subtitle }: { num: string, title: string, subtitle?: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-[#3FAE49] text-white flex items-center justify-center font-black text-[13px] shadow-sm">
      {num}
    </div>
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
      <h3 className="text-[15px] md:text-[16px] font-black text-[#111827] uppercase tracking-wide">{title}</h3>
      {subtitle && <span className="text-[11px] text-[#3FAE49] font-bold bg-[#EAF6EA] px-3 py-1 rounded-full w-fit">{subtitle}</span>}
    </div>
  </div>
);

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    organisation: "",
    mobile: "",
    whatsapp: "",
    email: "",
    state: "",
    city: "",
    preferredContact: "WhatsApp",
    quantity: "",
    unit: "Sets",
    deliveryDate: "",
    additionalRequirements: "",
    hasDesign: "",
    whatsappUpdates: true,
  });

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [ageSizeCategories, setAgeSizeCategories] = useState<string[]>([]);
  const [customisationOptions, setCustomisationOptions] = useState<string[]>([]);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateField = (name: string, value: string | boolean | number, products: string[] = selectedProducts): string => {
    switch (name) {
      case "fullName":
        const trimmedName = typeof value === 'string' ? value.trim() : "";
        if (!trimmedName) return "Please enter your full name.";
        if (trimmedName.length < 2) return "Name must be at least 2 characters.";
        if (!/[a-zA-Z]/.test(trimmedName)) return "Name must contain alphabetical characters.";
        return "";
      case "organisation":
        const trimmedOrg = typeof value === 'string' ? value.trim() : "";
        if (!trimmedOrg) return "Please enter your organisation name.";
        if (trimmedOrg.length < 2) return "Organisation name must be at least 2 characters.";
        return "";
      case "mobile":
        const cleanMobile = typeof value === 'string' ? value.replace(/[\s-]/g, "") : "";
        if (!cleanMobile) return "Please enter your mobile number.";
        if (!/^(?:\+91|91)?\d{10}$/.test(cleanMobile)) return "Please enter a valid 10-digit mobile number.";
        return "";
      case "email":
        const trimmedEmail = typeof value === 'string' ? value.trim() : "";
        if (!trimmedEmail) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) return "Please enter a valid email address.";
        return "";
      case "whatsapp":
        if (!(typeof value === 'string' ? value.trim() : "")) return "WhatsApp number is required.";
        const cleanWhatsapp = typeof value === 'string' ? value.replace(/[\s-]/g, "") : "";
        const matchWp = cleanWhatsapp.match(/^(?:\+91|0091)?([6-9]\d{9})$/);
        if (!matchWp || /^(.)\1{9}$/.test(matchWp[1])) {
          return "Please enter a valid 10-digit Indian WhatsApp number.";
        }
        return "";
      case "state":
        if (!value) return "Please select a state.";
        return "";
      case "city":
        if (!(typeof value === 'string' ? value.trim() : "")) return "Please enter your city / district.";
        return "";
      case "products":
        if (products.length === 0) return "Please select at least one uniform type.";
        return "";
      case "quantity":
        if (!value) return "Please enter a valid quantity.";
        const qty = Number(value);
        if (isNaN(qty) || qty <= 0) return "Please enter a valid quantity.";
        return "";
      case "deliveryDate":
        if (!value) return "Please select a required delivery date.";
        const selectedDate = new Date(value as string | number);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (selectedDate < today) return "Please select today or a future date.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let newValue: string | boolean | number = value;
    if (type === "checkbox") {
      newValue = (e.target as HTMLInputElement).checked;
    }
    
    setFormData(prev => ({ ...prev, [name]: newValue }));

    if (touched[name]) {
      const errorMsg = validateField(name, newValue);
      setErrors(prev => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let val: string | boolean | number = value;
    if (type === "checkbox") val = (e.target as HTMLInputElement).checked;
    
    setTouched(prev => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, val);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const toggleProduct = (prod: string) => {
    setSelectedProducts(prev => {
      const newProducts = prev.includes(prod) ? prev.filter(p => p !== prod) : [...prev, prod];
      if (touched["products"]) {
        setErrors(errs => ({ ...errs, products: validateField("products", "", newProducts) }));
      }
      return newProducts;
    });
  };

  const toggleAgeSize = (size: string) => {
    setAgeSizeCategories(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleCustomisation = (opt: string) => {
    setCustomisationOptions(prev => 
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};
    
    const fieldsToValidate = ["fullName", "organisation", "mobile", "whatsapp", "email", "state", "city", "quantity", "deliveryDate"];
    
    fieldsToValidate.forEach(field => {
      newTouched[field] = true;
      const err = validateField(field, formData[field as keyof typeof formData]);
      if (err) newErrors[field] = err;
    });

    newTouched["products"] = true;
    const prodErr = validateField("products", "", selectedProducts);
    if (prodErr) newErrors["products"] = prodErr;

    setErrors(newErrors);
    setTouched(prev => ({ ...prev, ...newTouched }));

    return Object.keys(newErrors).length === 0;
  };

  const focusFirstError = () => {
    setTimeout(() => {
      const errorElement = document.querySelector('[aria-invalid="true"]');
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        (errorElement as HTMLElement).focus?.();
      }
    }, 100);
  };

  const normalizeWhatsAppNumber = (value: string) => {
    const clean = value.replace(/[\s-]/g, "");
    const match = clean.match(/^(?:\+91|0091)?([6-9]\d{9})$/);
    if (match && !/^(.)\1{9}$/.test(match[1])) {
      return `+91${match[1]}`;
    }
    return value;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    const isValid = validateForm();
    if (!isValid) {
      focusFirstError();
      return;
    }

    const serviceId = (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "").trim();
    const templateId = (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "").trim();
    const publicKey = (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "").trim();

    if (!serviceId || !templateId || !publicKey) {
      setSubmitError("EmailJS configuration is missing. Please check your environment variables.");
      return;
    }

    setIsSubmitting(true);

    const messageDetails = `
Quote Request Details:
---------------------
Name: ${formData.fullName.trim()}
Organisation: ${formData.organisation.trim()}
Mobile: ${formData.mobile.replace(/[\s-]/g, "")}
WhatsApp: ${normalizeWhatsAppNumber(formData.whatsapp) || formData.whatsapp}
Email: ${formData.email.trim()}
Location: ${formData.city.trim()}, ${formData.state}
Preferred Contact: ${formData.preferredContact}

Product Requirements:
---------------------
Uniform Types: ${selectedProducts.length ? selectedProducts.join(", ") : "None"}
Quantity: ${formData.quantity} ${formData.unit}
Delivery Date: ${formData.deliveryDate}
Age/Size Categories: ${ageSizeCategories.length ? ageSizeCategories.join(", ") : "None"}
Customisation: ${customisationOptions.length ? customisationOptions.join(", ") : "None"}
Design Status: ${formData.hasDesign || "Not specified"}

Additional Requirements:
------------------------
${formData.additionalRequirements.trim() || "None"}

WhatsApp Updates: ${formData.whatsappUpdates ? "Yes" : "No"}
`.trim();

    const templateParams = {
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      message: messageDetails,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey,
        }
      );
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        organisation: "",
        mobile: "",
        whatsapp: "",
        email: "",
        state: "",
        city: "",
        preferredContact: "WhatsApp",
        quantity: "",
        unit: "Sets",
        deliveryDate: "",
        additionalRequirements: "",
        hasDesign: "",
        whatsappUpdates: true,
      });
      setSelectedProducts([]);
      setAgeSizeCategories([]);
      setCustomisationOptions([]);
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error("EmailJS Full Error Object:", error);
      const err = error as Record<string, unknown>;
      const errorMsg = err?.text || err?.message || "Unknown error";
      const status = err?.status || "No status";
      console.error(`EmailJS Failed - Status: ${status}, Text: ${errorMsg}`);
      setSubmitError(`Unable to send your request right now. (Status: ${status}, Error: ${errorMsg})`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTodayDateString = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const inputClass = "w-full bg-gray-50/50 border border-gray-200 rounded-lg px-4 py-3.5 text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FAE49]/20 focus:border-[#3FAE49] transition-all font-medium";
  const errorInputClass = "border-red-500 focus:border-red-500 focus:ring-red-500/20";
  const labelClass = "block text-[12px] font-bold text-[#111827] mb-2 uppercase tracking-wide";

  const productsList = [
    { name: "School Uniforms", icon: User },
    { name: "School Sports Uniforms", icon: Award },
    { name: "Sports Team Uniforms", icon: Users },
    { name: "Corporate / Office Uniforms", icon: Building2 },
    { name: "Corporate T-Shirts", icon: Shirt },
    { name: "Trackpants", icon: Scissors },
    { name: "Custom T-Shirts", icon: Settings },
    { name: "Other", icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-12 pb-16 overflow-hidden selection:bg-[#3FAE49] selection:text-white">
      <div className="container mx-auto max-w-[1440px] px-4 md:px-6 lg:px-12">

        {/* HEADER */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#3FAE49]" />
            <span className="text-[#3FAE49] font-bold text-[12px] tracking-[0.25em] uppercase">
              GET STARTED
            </span>
            <div className="w-12 h-[2px] bg-[#3FAE49]" />
          </div>
          <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-black text-[#111827] uppercase tracking-tighter leading-tight mb-5">
            GET YOUR <span className="text-[#3FAE49]">CUSTOM UNIFORM</span> QUOTE
          </h1>
          <p className="text-gray-500 text-[16px] md:text-[18px] max-w-2xl mx-auto font-medium leading-relaxed">
            Share your requirements and our team will get in touch with the best suitable solution and quotation.
          </p>
          <div className="w-12 h-1 bg-[#3FAE49] mx-auto mt-10 rounded-full opacity-30" />
        </m.div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT: QUOTATION FORM */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 bg-white border border-gray-100 rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-10 lg:p-12"
          >
            <form onSubmit={handleSubmit} noValidate>

              {/* SECTION 1 */}
              <SectionHeader num="1" title="YOUR DETAILS" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-12">
                <div>
                  <label htmlFor="fullName" className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                  <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your full name" className={`${inputClass} ${errors.fullName ? errorInputClass : ''}`} aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "fullName-error" : undefined} />
                  {errors.fullName && <div id="fullName-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.fullName}</div>}
                </div>
                <div>
                  <label htmlFor="organisation" className={labelClass}>School / Company / Organisation Name <span className="text-red-500">*</span></label>
                  <input id="organisation" type="text" name="organisation" value={formData.organisation} onChange={handleChange} onBlur={handleBlur} placeholder="Enter organisation name" className={`${inputClass} ${errors.organisation ? errorInputClass : ''}`} aria-invalid={!!errors.organisation} aria-describedby={errors.organisation ? "organisation-error" : undefined} />
                  {errors.organisation && <div id="organisation-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.organisation}</div>}
                </div>
                <div>
                  <label htmlFor="mobile" className={labelClass}>Mobile Number <span className="text-red-500">*</span></label>
                  <div className="flex">
                    <select className="bg-gray-50/50 border border-gray-200 border-r-0 rounded-l-lg px-3 py-3.5 text-[14px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3FAE49]/20 focus:border-[#3FAE49] font-bold">
                      <option>+91</option>
                    </select>
                    <input id="mobile" type="tel" name="mobile" value={formData.mobile} onChange={handleChange} onBlur={handleBlur} placeholder="Enter mobile number" className={`w-full bg-gray-50/50 border border-gray-200 rounded-r-lg px-4 py-3.5 text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FAE49]/20 focus:border-[#3FAE49] transition-all font-medium ${errors.mobile ? errorInputClass : ''}`} aria-invalid={!!errors.mobile} aria-describedby={errors.mobile ? "mobile-error" : undefined} />
                  </div>
                  {errors.mobile && <div id="mobile-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.mobile}</div>}
                </div>
                <div>
                  <label htmlFor="whatsapp" className={labelClass}>WhatsApp Number <span className="text-red-500">*</span></label>
                  <div className="flex">
                    <select className="bg-gray-50/50 border border-gray-200 border-r-0 rounded-l-lg px-3 py-3.5 text-[14px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#3FAE49]/20 focus:border-[#3FAE49] font-bold">
                      <option>+91</option>
                    </select>
                    <input id="whatsapp" type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} onBlur={handleBlur} placeholder="Enter WhatsApp number" className={`w-full bg-gray-50/50 border border-gray-200 rounded-r-lg px-4 py-3.5 text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3FAE49]/20 focus:border-[#3FAE49] transition-all font-medium ${errors.whatsapp ? errorInputClass : ''}`} aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined} />
                  </div>
                  {errors.whatsapp && <div id="whatsapp-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.whatsapp}</div>}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address <span className="text-red-500">*</span></label>
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your email address" className={`${inputClass} ${errors.email ? errorInputClass : ''}`} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />
                  {errors.email && <div id="email-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.email}</div>}
                </div>
                <div>
                  <label htmlFor="state" className={labelClass}>State <span className="text-red-500">*</span></label>
                  <select id="state" name="state" value={formData.state} onChange={handleChange} onBlur={handleBlur} className={`${inputClass} ${errors.state ? errorInputClass : ''}`} aria-invalid={!!errors.state} aria-describedby={errors.state ? "state-error" : undefined}>
                    <option value="">Select your state</option>
                    <option>Tamil Nadu</option>
                    <option>Kerala</option>
                    <option>Karnataka</option>
                    <option>Andhra Pradesh</option>
                    <option>Other</option>
                  </select>
                  {errors.state && <div id="state-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.state}</div>}
                </div>
                <div>
                  <label htmlFor="city" className={labelClass}>City / District <span className="text-red-500">*</span></label>
                  <input id="city" type="text" name="city" value={formData.city} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your city / district" className={`${inputClass} ${errors.city ? errorInputClass : ''}`} aria-invalid={!!errors.city} aria-describedby={errors.city ? "city-error" : undefined} />
                  {errors.city && <div id="city-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.city}</div>}
                </div>
                <div>
                  <label className={labelClass}>Preferred Contact <span className="text-red-500">*</span></label>
                  <div className="flex items-center gap-6 mt-4">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="preferredContact" value="WhatsApp" checked={formData.preferredContact === "WhatsApp"} onChange={handleChange} onBlur={handleBlur} className="w-4 h-4 accent-[#3FAE49] cursor-pointer" />
                      <span className="text-[13px] font-bold text-gray-700 group-hover:text-[#3FAE49] transition-colors">WhatsApp</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="preferredContact" value="Email" checked={formData.preferredContact === "Email"} onChange={handleChange} onBlur={handleBlur} className="w-4 h-4 accent-[#3FAE49] cursor-pointer" />
                      <span className="text-[13px] font-bold text-gray-700 group-hover:text-[#3FAE49] transition-colors">Email</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div id="products-section" tabIndex={-1} aria-invalid={!!errors.products} aria-describedby={errors.products ? "products-error" : undefined} className="outline-none">
                <SectionHeader num="2" title="PRODUCT REQUIRED" subtitle="You can select multiple" />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                  {productsList.map(p => {
                    const isSelected = selectedProducts.includes(p.name);
                    return (
                      <div
                        key={p.name}
                        onClick={() => toggleProduct(p.name)}
                        className={`border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3 cursor-pointer transition-all duration-300 relative overflow-hidden ${isSelected ? 'border-[#3FAE49] bg-[#EAF6EA] shadow-[0_4px_12px_rgba(63,174,73,0.1)]' : 'border-gray-200 hover:border-[#3FAE49]/40 bg-white'} ${errors.products ? 'border-red-500' : ''}`}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle2 className="w-4 h-4 text-[#3FAE49]" />
                          </div>
                        )}
                        <p.icon className={`w-8 h-8 ${isSelected ? 'text-[#3FAE49]' : 'text-gray-400'}`} strokeWidth={1.5} />
                        <span className={`text-[12px] font-bold leading-tight ${isSelected ? 'text-[#3FAE49]' : 'text-gray-600'}`}>{p.name}</span>
                      </div>
                    )
                  })}
                </div>
                {errors.products && <div id="products-error" className="text-red-500 text-[11px] font-bold mb-10" aria-live="polite">{errors.products}</div>}
                {!errors.products && <div className="mb-12"></div>}
              </div>

              {/* SECTION 3 */}
              <SectionHeader num="3" title="ORDER DETAILS" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label htmlFor="quantity" className={labelClass}>Approximate Quantity <span className="text-red-500">*</span></label>
                  <input id="quantity" type="number" name="quantity" value={formData.quantity} onChange={handleChange} onBlur={handleBlur} placeholder="Enter quantity" className={`${inputClass} ${errors.quantity ? errorInputClass : ''}`} aria-invalid={!!errors.quantity} aria-describedby={errors.quantity ? "quantity-error" : undefined} />
                  {errors.quantity && <div id="quantity-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.quantity}</div>}
                </div>
                <div>
                  <label htmlFor="unit" className={labelClass}>Unit <span className="text-red-500">*</span></label>
                  <select id="unit" name="unit" value={formData.unit} onChange={handleChange} onBlur={handleBlur} className={inputClass}>
                    <option>Sets</option>
                    <option>Pieces</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="deliveryDate" className={labelClass}>Required Delivery Date <span className="text-red-500">*</span></label>
                  <input id="deliveryDate" type="date" name="deliveryDate" value={formData.deliveryDate} onChange={handleChange} onBlur={handleBlur} min={getTodayDateString()} className={`${inputClass} ${errors.deliveryDate ? errorInputClass : ''}`} aria-invalid={!!errors.deliveryDate} aria-describedby={errors.deliveryDate ? "deliveryDate-error" : undefined} />
                  {errors.deliveryDate && <div id="deliveryDate-error" className="text-red-500 text-[11px] font-bold mt-1.5" aria-live="polite">{errors.deliveryDate}</div>}
                </div>
              </div>
              <div className="mb-12">
                <label className={labelClass}>Age / Size Category</label>
                <div className="flex flex-wrap gap-8 mt-4">
                  {['Kids', 'Students', 'Adults', 'Mixed Sizes'].map(size => (
                    <label key={size} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" checked={ageSizeCategories.includes(size)} onChange={() => toggleAgeSize(size)} className="w-5 h-5 accent-[#3FAE49] cursor-pointer border-gray-300 rounded" />
                      <span className="text-[14px] font-bold text-gray-700 group-hover:text-[#3FAE49] transition-colors">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* SECTION 4 */}
              <SectionHeader num="4" title="CUSTOMISATION & PRINTING" subtitle="You can select multiple" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-6 mb-12 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                {['Logo Embroidery', 'Screen Printing', 'Sublimation Printing', 'Name Printing', 'Number Printing', 'Custom Design', 'Not Sure — Need Guidance'].map(opt => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" checked={customisationOptions.includes(opt)} onChange={() => toggleCustomisation(opt)} className="w-5 h-5 accent-[#3FAE49] cursor-pointer rounded" />
                    <span className="text-[14px] font-bold text-gray-700 group-hover:text-[#3FAE49] transition-colors">{opt}</span>
                  </label>
                ))}
              </div>

              {/* SECTION 5 */}
              <SectionHeader num="5" title="DESIGN & REFERENCE" />
              <div className="mb-6">
                <label className={labelClass}>Do you already have a design?</label>
                <div className="flex flex-wrap gap-8 mt-4">
                  {['Yes', 'No', 'Need Design Support'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer group">
                      <input type="radio" name="hasDesign" value={opt} checked={formData.hasDesign === opt} onChange={handleChange} className="w-5 h-5 accent-[#3FAE49] cursor-pointer" />
                      <span className="text-[14px] font-bold text-gray-700 group-hover:text-[#3FAE49] transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-12">

              </div>

              {/* SECTION 6 */}
              <SectionHeader num="6" title="ADDITIONAL REQUIREMENTS" />
              <div className="mb-6">
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleChange}
                  placeholder="Mention colours, fabric, sizes, design details or any other special requirements..."
                  className={`${inputClass} min-h-[140px] resize-y`}
                />
              </div>
              <div className="mb-12">
                <label className="flex items-start gap-4 cursor-pointer bg-gray-50/80 p-5 rounded-xl border border-gray-100 hover:border-[#3FAE49]/30 transition-all">
                  <input type="checkbox" name="whatsappUpdates" checked={formData.whatsappUpdates} onChange={handleChange} className="w-5 h-5 mt-0.5 accent-[#3FAE49] cursor-pointer" />
                  <span className="text-[14px] font-bold text-gray-800 leading-snug">I would like to receive the quotation and updates through WhatsApp.</span>
                </label>
              </div>

              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 font-bold text-sm text-center" aria-live="assertive">
                  {submitError}
                </div>
              )}

              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-[#EAF6EA] border border-[#3FAE49] text-[#2A3F2D] font-bold text-sm text-center" aria-live="polite">
                  Thank you! Your quote request has been sent successfully. Our uniform experts will contact you shortly.
                </div>
              )}

              {/* CTA */}
              <div className="pt-6 border-t border-gray-100">
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#3FAE49] hover:bg-[#2A3F2D] disabled:opacity-70 disabled:cursor-not-allowed text-white py-5 rounded-xl font-black text-[16px] uppercase tracking-[0.15em] shadow-[0_8px_20px_rgba(63,174,73,0.25)] hover:shadow-[0_8px_25px_rgba(42,63,45,0.3)] transition-all duration-300 flex items-center justify-center gap-3 group">
                  {isSubmitting ? "SENDING REQUEST..." : "GET MY QUOTE"}
                  {!isSubmitting && <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />}
                </button>
                <div className="flex items-center justify-center gap-2 mt-5 text-gray-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-[12px] font-bold tracking-wide">Your information is only used to respond to your enquiry.</span>
                </div>
              </div>
            </form>
          </m.div>

          {/* RIGHT: SIDEBAR */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            {/* Card 1 */}
            <div className="bg-[#0B2516] rounded-[24px] overflow-hidden shadow-xl">
              <div className="p-8">
                <h3 className="text-white font-black text-[16px] uppercase tracking-[0.1em] mb-8">
                  WHY CHOOSE <span className="text-[#3FAE49]">EVENVIBE?</span>
                </h3>
                <div className="flex flex-col gap-6">
                  {[
                    { text: '15+ Years of Industry Experience', icon: Award },
                    { text: 'Premium Quality Fabrics & Finishing', icon: Layers },
                    { text: 'Large-Scale Uniform Production', icon: Factory },
                    { text: 'School, Sports & Corporate Specialists', icon: Users },
                    { text: 'Custom Designs & Branding', icon: Scissors },
                    { text: 'Bulk Order Capability', icon: PackageCheck },
                    { text: 'Serving Tamil Nadu & Kerala', icon: MapPin }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
                        <item.icon className="w-4 h-4 text-[#3FAE49]" strokeWidth={2} />
                      </div>
                      <span className="text-white/90 text-[14px] font-bold leading-snug mt-1.5">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <h4 className="text-[12px] font-black text-[#3FAE49] uppercase tracking-[0.15em] mb-2">NEED HELP CHOOSING?</h4>
              <h3 className="text-[#111827] font-black text-[22px] leading-tight mb-6">Talk to Our Uniform Experts</h3>

              <ul className="flex flex-col gap-4 mb-8">
                {['Uniform design selection', 'Fabric recommendations', 'Size planning', 'Logo and branding', 'Production and delivery planning', 'Best pricing for bulk orders'].map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#3FAE49] flex-shrink-0 mt-0.5" />
                    <span className="text-[14px] text-gray-600 font-bold leading-snug">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/919344039068?text=Hi%20EvenVibe%20Uniforms%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20uniforms."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with EvenVibe Uniforms on WhatsApp"
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-xl font-black text-[13px] uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:-rotate-12 transition-transform" />
                  WHATSAPP US
                </a>
                <a
                  href="tel:+919344039068"
                  aria-label="Call EvenVibe Uniforms"
                  className="w-full bg-white border-2 border-gray-200 hover:border-[#111827] hover:text-[#111827] text-gray-600 py-4 rounded-xl font-black text-[13px] uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  CALL US
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-[24px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
              <h3 className="text-[#111827] font-black text-[15px] uppercase tracking-[0.1em] text-center mb-6">WE ALSO PROVIDE</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Trackpants', icon: Layers },
                  { name: 'T-Shirts', icon: Shirt },
                  { name: 'Sports Jerseys', icon: Award },
                  { name: 'Hoodies', icon: User }
                ].map((prod, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:bg-[#EAF6EA] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#3FAE49]/30">
                    <prod.icon className="w-8 h-8 text-[#3FAE49]" strokeWidth={1.5} />
                    <span className="text-[11px] font-black text-[#111827] uppercase tracking-widest">{prod.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </m.div>
        </div>

        {/* BOTTOM TRUST STRIP */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 w-full border-t border-gray-100 pt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {[
              { icon: Users, num: '50,000+', text: 'Happy Customers' },
              { icon: Shirt, num: '1,00,000+', text: 'Sets Produced Every Year' },
              { icon: Truck, num: '10–30 Days', text: 'Delivery Time' },
              { icon: Award, num: 'Premium Quality', text: 'Fabrics & Finishing' }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i > 1 && 'pt-10 lg:pt-0'} ${i === 1 && 'pt-0 lg:pt-0'}`}>
                <div className="w-14 h-14 bg-[#EAF6EA] rounded-full flex items-center justify-center mb-5 border border-[#3FAE49]/10">
                  <stat.icon className="w-7 h-7 text-[#3FAE49]" strokeWidth={1.5} />
                </div>
                <h4 className="font-black text-[#111827] text-[24px] md:text-[28px] mb-1">{stat.num}</h4>
                <p className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">{stat.text}</p>
              </div>
            ))}
          </div>
        </m.div>

      </div>
    </div>
  );
}
