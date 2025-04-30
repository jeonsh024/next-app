import { createProduct, deleteProduct } from "./actions";
import { prisma } from "@/lib/prisma";
import { Input, Button } from "@/components/ui";
import { CommonConfirmButton } from "@/components/common/button/CommonConfirmButton";
import { Trash2 } from "lucide-react";

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
      <h1 className="text-2xl font-bold">상품 추가</h1>

      {/* 폼: Server Action과 직접 연결 */}
      <form action={createProduct} className="flex gap-2 items-center">
        <Input
          type="text"
          name="name"
          placeholder="상품명을 입력하세요"
          className="border px-3 py-2 w-full"
          required
        />
        <Button type="submit" className="rounded">
          추가
        </Button>
      </form>

      <h2 className="text-xl font-semibold mt-6">상품 목록</h2>
      <ul className="space-y-1">
        {products.map((p: any) => (
          <li className="flex items-center gap-2" key={p.id}>
            • {p.name}
            <form
              action={async () => {
                "use server";
                await deleteProduct(p.id);
              }}
            >
              <CommonConfirmButton
                message="정말 삭제하시겠습니까?"
                confirmText="삭제"
                cancelText="취소"
                onConfirm={async () => {
                  "use server";
                  await deleteProduct(p.id);
                }}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                삭제
              </CommonConfirmButton>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
