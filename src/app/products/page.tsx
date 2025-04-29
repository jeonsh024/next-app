import { createProduct } from "./actions";
import { prisma } from "@/lib/prisma";

async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductsPage() {
  // const products = await getProducts();
  const products = await prisma.product.findMany();

  return (
    <main className="max-w-xl mx-auto mt-10 space-y-6">
      <h1 className="text-2xl font-bold">🛒 상품 추가</h1>

      {/* ✅ 폼: Server Action과 직접 연결 */}
      <form action={createProduct} className="flex gap-2 items-center">
        <input
          type="text"
          name="name"
          placeholder="상품명을 입력하세요"
          className="border px-3 py-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          추가
        </button>
      </form>

      <h2 className="text-xl font-semibold mt-6">📋 상품 목록</h2>
      <ul className="space-y-1">
        {products.map((p: any) => (
          <li key={p.id}>• {p.name}</li>
        ))}
      </ul>
    </main>
  );
}
