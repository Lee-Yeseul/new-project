import { useKakaoLoginCodeMutation } from "@src/hooks/querys/auth";
import { SignInResponse } from "@src/types/auth";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function KakaoRedirect() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  const handleSuccess = (data: SignInResponse) => {
    console.log(data);
  };
  const handleError = (error: Error) => {
    console.log(error);
  };

  const { mutate } = useKakaoLoginCodeMutation(handleSuccess, handleError);

  useEffect(() => {
    if (!code && error) {
      navigate("/dashboard");
    }
    if (!isLoginSuccess && code) {
      mutate(code);
      setIsLoginSuccess(true);
    }
  }, []);

  return <></>;
}
