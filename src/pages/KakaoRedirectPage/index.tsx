import { useKakaoLoginCodeMutation } from "@src/hooks/querys/auth";
import { SignInResponse } from "@src/types/auth";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function KakaoRedirect() {
  const [searchParams] = useSearchParams();
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const code = searchParams.get("code");

  const handleSuccess = (data: SignInResponse) => {
    console.log(data);
  };
  const handleError = (error: Error) => {
    console.log(error);
  };

  const { mutate } = useKakaoLoginCodeMutation(handleSuccess, handleError);

  useEffect(() => {
    if (!isLoginSuccess && code) {
      mutate(code);
    }
    setIsLoginSuccess(true);
  }, []);

  return <></>;
}
