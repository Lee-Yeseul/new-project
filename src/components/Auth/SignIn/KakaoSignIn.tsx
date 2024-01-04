import { Link } from "react-router-dom";

export default function KakaoSignIn() {
  const clientId = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirectURL = import.meta.env.VITE_KAKAO_REDIRECT_URL;
  const kakaoSignInURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectURL}`;

  return (
    <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
      <Link to={kakaoSignInURL}>카카오로 로그인하기</Link>
    </button>
  );
}
