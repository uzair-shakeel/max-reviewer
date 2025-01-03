"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../components/shared/navbar";
import Footer from "../components/shared/footer";
import Rating from "../components/reviews/rating";
import withAuth from "../utils/with-authenticated";

const ReviewPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("3months");
  const router = useRouter();

  const ratings = [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 7 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 },
  ];

  const monthlyData = [
    { month: "Ene", count: 100 },
    { month: "Feb", count: 150 },
    { month: "Mar", count: 75 },
  ];

  return (
    <div className="min-h-screen bg-[#17375F]">
      <Navbar />

      <div className="fixed inset-x-4 top-[80px] bottom-0">
        <div className="h-full bg-white max-w-md mx-auto rounded-t-xl flex flex-col">
          <div className="p-6 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-[500] text-gray-700">
                Reviews totales: 347
              </h1>
              <button onClick={() => router.back()}>
                <Image src="/close.svg" alt="Close" width={24} height={24} />
              </button>
            </div>

            <div className="flex gap-5 ">
              <div className="space-y-2 w-[60%]">
                {ratings.map(({ stars, percentage }) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="w-4 text-sm text-gray-600">{stars}</span>
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FFD600] rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col  items-center justify-center text-center w-[35%]">
                <div className="text-md font-light text-[#6C7278]">
                  Calificación
                </div>
                <div className="text-3xl font-semibold text-[#6C7278]">
                  4.87
                </div>
                <div className="flex justify-center gap-1 mt-2">
                  <Rating />
                </div>
              </div>
            </div>

            <div className="relative">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full appearance-none px-4 py-2 border-2 border-[#71C9ED] rounded-lg text-gray-700 focus:outline-none focus:border-[#71C9ED] bg-white"
              >
                <option value="3months">Últimos 3 meses</option>
                <option value="6months">Últimos 6 meses</option>
                <option value="year">Último año</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative h-48 mt-4 border rounded-lg border-[#C2E0F4] p-4">
              <div className="absolute inset-0">
                {[0, 25, 50, 75, 100, 125, 150].map((value, idx) => (
                  <div
                    key={value}
                    className={`absolute w-full border-t ${
                      idx === 0 ? "border-transparent" : "border-gray-200"
                    }`}
                    style={{
                      bottom: `${(value / 150) * 100}%`,
                    }}
                  />
                ))}

                <div className="relative h-48 mt-4  rounded-lg  p-4">
                  <div className="absolute inset-0">
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-600 -translate-x-2">
                      {[0, 25, 50, 75, 100, 125, 150].reverse().map((value) => (
                        <div key={value} className="text-right">
                          {value}
                        </div>
                      ))}
                    </div>

                    {[0, 25, 50, 75, 100, 125, 150].map((value) => (
                      <div
                        key={value}
                        className="absolute  border-t z-40 border-gray-200"
                        style={{
                          bottom: `${(value / 150) * 100}%`,
                        }}
                      />
                    ))}

                    <svg
                      className="absolute inset-0 z-30"
                      viewBox="0 0 80 70"
                      preserveAspectRatio="none"
                    >
                      <polyline
                        points={monthlyData
                          .map(
                            (data, i) =>
                              `${(i / (monthlyData.length - 1)) * 100},${
                                100 - (data.count / 150) * 100
                              }`
                          )
                          .join(" ")}
                        className="stroke-[#FFD600] stroke-[2]  fill-none"
                      />
                    </svg>

                    {/* {monthlyData.map((data, i) => (
                      <div
                        key={data.month}
                        className="absolute w-3 h-3 bg-[#FFD600] rounded-full -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${(i / (monthlyData.length - 1)) * 100}%`, // Horizontal scaling
                          bottom: `${(data.count / 150) * 100}%`, // Vertical scaling
                        }}
                      />
                    ))} */}
                  </div>

                  <div className="absolute -bottom-4 px-8 w-full flex justify-between text-sm text-gray-600">
                    {monthlyData.map((data) => (
                      <div key={data.month} className="text-center">
                        {data.month}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto p-4 text-center">
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ReviewPage);
