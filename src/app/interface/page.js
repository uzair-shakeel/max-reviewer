"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/shared/navbar";
import { useRouter } from "next/navigation";
import axios from "axios";
import Footer from "../components/shared/footer";
import ProductBox from "../components/product/product-box";
import withAuth from "../utils/with-authenticated";

const Interface = () => {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const customerId = "mockCustomerId";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      setTimeout(async () => {
        try {
          const mockData = [
            {
              id: "1",
              name: "Café Córdoba",
              scans: 2359,
              code: "64IV9",
              platform: "Google Review",
            },
          ];

          setProducts(mockData);

          const response = await axios.get(`/api/cards/customer/${customerId}`);
          setProducts(response.data);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        } finally {
          setLoading(false);
        }
      }, 1000);
    };

    fetchProducts();
  }, [customerId]);

  return (
    <div className="min-h-screen bg-[#17375F]">
      <Navbar />

      <div className="bg-white top-[80px] fixed max-w-md mx-auto bottom-0 right-4 left-4 rounded-t-xl">
        <main className="px-2 py-6">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <img
                  src="/qr-code.svg"
                  className="w-[20px] h-[20px] object-contain overflow-hidden"
                />
                <h2 className="text-lg font-semibold text-[#6C7278]">
                  Tus productos ({products.length})
                </h2>
              </div>
              <button
                onClick={() => router.push("/add-product")}
                className="text-[#6DC1E6]"
              >
                <img
                  src="/plus.svg"
                  className="w-[30px] h-[30px] object-contain overflow-hidden"
                />
              </button>
            </div>

            {loading ? (
              <p className="text-center text-gray-600">Loading...</p>
            ) : products.length === 0 ? (
              <p className="text-center text-gray-600">No products found.</p>
            ) : (
              products.map((product) => (
                <ProductBox key={product.id} product={product} />
              ))
            )}
          </div>
        </main>
        <footer className="absolute bottom-0 w-full text-center p-4">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default withAuth(Interface);
