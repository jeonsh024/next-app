"use client";

import { Input, Button } from "@/components/ui";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!id || !password) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    try {
      // 로그인 요청: API 연동 필요시 여기에 axios 요청 추가
      console.log("로그인 시도:", { id, password });

      // 예: localStorage.setItem('token', res.data.token)
      alert(`환영합니다, ${id}님!`);
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md space-y-4">
        <h1 className="text-xl font-bold text-center">로그인</h1>

        <div className="space-y-2">
          <Input
            placeholder="아이디"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button className="w-full mt-2" onClick={handleLogin}>
          로그인
        </Button>
      </div>
    </main>
  );
}
