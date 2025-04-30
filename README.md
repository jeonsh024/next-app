This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

> ## Node Version (필수)

- node 20.19.1 버전 사용
- 다른 버전의 경우 install 에러가 날 수 있습니다.

## 서버 세팅

npx prisma migrate dev --name init

## 데이터 확인

npx prisma studio


## 🧩 UI 컴포넌트 (shadcn/ui) 설치 및 사용 방법

이 프로젝트는 [shadcn/ui](https://ui.shadcn.com/) 기반의 UI 컴포넌트를 사용합니다.  
새로운 컴포넌트를 추가하려면 다음 명령어를 사용하세요.

### ✅ 컴포넌트 추가 명령어

pnpm dlx shadcn-ui@latest add button

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
