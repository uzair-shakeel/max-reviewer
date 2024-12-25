"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dummyData = {
      user: {
        id: "456",
        role: "user",
        permissions: ["view", "comment"],
      },
      sessions: [
        { id: "s1", device: "Desktop" },
        { id: "s2", device: "Mobile" },
      ],
    };
    console.log({
      userId: dummyData.user.id,
      role: dummyData.user.role,
      firstSessionDevice: dummyData.sessions[0].device,
    });

    try {
      router.push("/interface");
      // Redirectly directly because there's no API here.

      const response = await axios.post("Add your login API here ", formData);
      console.log(response.data);
      if (response.status === 200 || response.status === 201) {
        console.log("Login successful:", response.data);
        router.push("/interface");
      } else {
        console.error("Unexpected response:", response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#17375F] flex items-center justify-between px-4">
      <div className="w-full min-h-screen flex flex-col justify-between max-w-md mx-auto">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-3 p-6">
            <img src="/logo.png" alt="MaxReviewer Logo" />
          </div>
          <h1 className="text-[#F18D19] text-2xl font-bold mb-2">
            Inicia sesión
          </h1>
        </div>
        <div className="bg-white flex-1 flex flex-col justify-between rounded-t-3xl h-full px-5 py-6">
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
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
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Recuérdame
                </label>
                <a href="#" className="text-[#6DC1E6]">
                  Olvidé mi contraseña
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-[#253368] text-white py-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Ingresar
              </button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-600">¿No tienes una cuenta? </span>
              <button
                onClick={() => router.push("/signup")}
                className="text-[#6DC1E6] font-medium"
              >
                Regístrate
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-[#6C7278] text-sm">
            ©2025, MaxReviewer
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
