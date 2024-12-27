"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import jsQR from "jsqr";
import withAuth from "../utils/with-authenticated";

const platforms = [
  { value: "google", label: "Google Reviews" },
  { value: "yelp", label: "Yelp" },
  { value: "tripadvisor", label: "TripAdvisor" },
];

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    productId: "",
    businessName: "",
    platform: platforms[0].value,
    profileLink: "",
  });

  const [scanning, setScanning] = useState(false);
  const videoRef = useRef(null);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleScan = async () => {
    setScanning(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();

        videoRef.current.onloadedmetadata = () => {
          scanQR();
        };
      }

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      const scanQR = () => {
        if (videoRef.current && videoRef.current.readyState === 4) {
          const video = videoRef.current;
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );
          const qrCode = jsQR(
            imageData.data,
            imageData.width,
            imageData.height
          );

          if (qrCode) {
            const scannedUrl = qrCode.data;
            const productId = scannedUrl.split("/").pop();

            setFormData((prev) => ({ ...prev, productId }));
            stopCamera();
            setScanning(false);
          } else {
            requestAnimationFrame(scanQR);
          }
        } else {
          requestAnimationFrame(scanQR);
        }
      };

      const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
          const tracks = videoRef.current.srcObject.getTracks();
          tracks.forEach((track) => track.stop());
        }
      };
    } catch (error) {
      console.error("Error accessing camera:", error);
      setScanning(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#17375F]">
      <Navbar />
      <div className="fixed inset-x-4 top-[80px] bottom-0">
        <div className="h-full bg-white max-w-md mx-auto rounded-t-xl flex flex-col">
          <main className="flex-1 overflow-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg text-[#6C7278] font-semibold">
                Configura tu producto
              </h2>
              <button onClick={() => router.back()} className="text-[#6DC1E6]">
                <Image src="/close.svg" alt="Close" width={20} height={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {scanning ? (
                <div className="relative w-full h-64 border-2 border-[#71C9ED] rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                  ></video>
                  <p className="absolute bottom-2 left-2 text-white bg-black/50 rounded px-2 py-1 text-sm">
                    Escaneando...
                  </p>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleScan}
                  className="w-full border-2 border-[#71C9ED] rounded-lg p-6 flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                  <div className="h-16 w-2/5 flex items-center justify-center">
                    <Image
                      src="/scan.svg"
                      alt="Camera"
                      width={60}
                      height={60}
                    />
                  </div>
                  <p className="text-[#6C7278] w-3/5 text-start font-bold">
                    Click para escanear con tu cámara móvil
                  </p>
                </button>
              )}
              {[
                {
                  label: "Número de producto",
                  name: "productId",
                  value: formData.productId,
                  type: "text",
                },
                {
                  label: "Nombre de la sucursal / negocio",
                  name: "businessName",
                  value: formData.businessName,
                  type: "text",
                },
                {
                  label: "Link del perfil",
                  name: "profileLink",
                  value: formData.profileLink,
                  type: "text",
                },
              ].map(({ label, name, value, type }) => (
                <div key={name} className="space-y-1">
                  <p className="text-sm text-gray-600">{label}</p>
                  <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#71C9ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71C9ED] focus:border-transparent"
                  />
                </div>
              ))}
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Elige la plataforma que quieres configurar
                </p>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border text-black border-[#71C9ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71C9ED] focus:border-transparent bg-white"
                >
                  {platforms.map(({ value, label }) => (
                    <option key={value} value={value}>  
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </form>
          </main>
          <footer className="p-6">
            <button
              onClick={() => router.push("/reviews")}
              type="submit"
              className="w-full py-3 px-4 bg-[#17375F] hover:bg-[#17375F]/90 text-white rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#17375F] transition-colors"
            >
              Guardar
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AddProductPage);
