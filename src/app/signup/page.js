"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const payload = {
      firstName: formData.companyName.split(" ")[0],
      lastName: formData.companyName.split(" ")[1],
      email: formData.email,
      password: formData.password,
      status: 1,
    };

    try {
      const response = await axios.post("/api/customers", payload);

      if (response.data?.status === "OK" && response.data?.data) {
        console.log("User created successfully:", response.data.data);
        router.push("/success");
      } else {
        console.error("Unexpected response structure:", response.data);
        alert("Error al crear la cuenta. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("No se pudo completar el registro. Por favor, verifica tus datos.");
    }
  };

  return (
    <div className="min-h-screen bg-[#17375F] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-3 p-6">
            <img src="/logo.png" />
          </div>
          <h1 className="text-[#F18D19] text-2xl font-bold mb-2">
            Crea tu cuenta
          </h1>
          <p className="text-white text-center text-sm">
            Para configurar tu producto{" "}
            <span className="text-[#6DC1E6] font-bold">MaxReviewer</span> crea
            una cuenta y accede a funciones exclusivas.
          </p>
        </div>
        <div className="bg-white rounded-t-3xl px-5 py-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="companyName"
                placeholder="Nombre de la empresa*"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6DC1E6]"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6DC1E6]"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center px-3 bg-[#6DC1E6] text-white rounded-l-lg">
                +52
              </div>
              <input
                type="number"
                name="phone"
                placeholder="Teléfono a 10 digitos*"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-16 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6DC1E6]"
              />
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6DC1E6]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirma tu contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#6DC1E6]"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-[#253368] text-white py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Registrarte
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">¿Ya tienes una cuenta? </span>
            <button
              onClick={() => router.push("/login")}
              className="text-[#6DC1E6] font-medium"
            >
              Inicia sesión
            </button>
          </div>
          <div className="mt-8 text-center text-[#6C7278] text-sm">
            ©2025, MaxReviewer
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
