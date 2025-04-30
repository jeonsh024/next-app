'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createProduct(formData: FormData) {
  const name = formData.get('name') as string;

  if (!name || name.trim() === '') {
    throw new Error('상품명은 필수입니다.');
  }

  await prisma.product.create({
    data: { name },
  });

  // 저장 후 리스트 새로고침
  revalidatePath('/products');
}

export async function updateProduct(id: number, name: string) {
  await prisma.product.update({
    where: { id },
    data: { name },
  });

  revalidatePath('/products');
}

export async function deleteProduct(id: number) {
  await prisma.product.delete({
    where: { id },
  });

  revalidatePath('/products'); // 캐시 무효화 → 자동 갱신
}
