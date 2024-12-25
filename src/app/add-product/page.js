"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";

export default function AddProductPage() {
  const [scanning, setScanning] = useState(false);
  const [productId, setProductId] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [platform, setPlatform] = useState("google");
  const [profileLink, setProfileLink] = useState("");
  const videoRef = useRef(null);
  const router = useRouter();

  const handleScan = async () => {
    setScanning(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }

      // Implement QR code scanning logic here
      // For demonstration, simulate a successful scan after 3 seconds
      setTimeout(() => {
        setProductId("SCANNED123");
        setScanning(false);

        // Stop the video stream
        if (videoRef.current && videoRef.current.srcObject) {
          const tracks = videoRef.current.srcObject.getTracks();
          tracks.forEach((track) => track.stop());
        }
      }, 3000);
    } catch (error) {
      console.error("Error accessing camera:", error);
      setScanning(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productId, businessName, platform, profileLink });
  };

  return (
    <div className="min-h-screen bg-[#17375F]">
      <Navbar />

      <div className="fixed inset-x-4 top-[80px] bottom-0">
        <div className="h-full bg-white rounded-t-xl flex flex-col">
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
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Número de producto</p>
                <input
                  type="text"
                  placeholder=""
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                  className="w-full px-3 py-2 border border-[#71C9ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71C9ED] focus:border-transparent"
                />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  Nombre de la sucursal / negocio
                </p>
                <input
                  type="text"
                  placeholder=""
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3 py-2 border border-[#71C9ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71C9ED] focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Elige la plataforma que quieres configurar
                </p>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-3 py-2 border border-[#71C9ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71C9ED] focus:border-transparent bg-white"
                >
                  <option value="google">Google Reviews</option>
                  <option value="yelp">Yelp</option>
                  <option value="tripadvisor">TripAdvisor</option>
                </select>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">Link del perfil</p>
                <input
                  type="text"
                  placeholder=""
                  value={profileLink}
                  onChange={(e) => setProfileLink(e.target.value)}
                  className="w-full px-3 py-2 border border-[#71C9ED] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#71C9ED] focus:border-transparent"
                />
              </div>
            </form>
          </main>
          <footer className="p-6">
            <button
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
}
