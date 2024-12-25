import ProductList from "../components/product-list";
import Navbar from "../components/navbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#17375F]">
      <Navbar />
      <div className="fixed inset-x-4 top-[80px] bottom-0">
        <div className="h-full bg-white rounded-t-xl flex flex-col">
          <ProductList />
          <footer className="mt-auto p-4 text-center">
            <p className="text-[#6C7278] text-sm">©2025, MaxReviewer</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
