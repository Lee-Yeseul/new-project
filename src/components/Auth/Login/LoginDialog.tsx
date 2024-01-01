import Dialog from "@src/components/common/Dialog";

import { useSignInMutation } from "@src/hooks/querys/auth";
import { SignInParams, SignInResponse } from "@src/types/auth";
import { storage } from "@src/utils/storage";

import Form from "@src/components/common/Form";

interface LoginDialogProps {
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}
export default function LoginDialog({ setIsDialogOpen }: LoginDialogProps) {
  const store = storage("sessionStorage");

  const handleLoginSuccess = (accessToken: SignInResponse) => {
    store.set(accessToken);
    setIsDialogOpen(false);
  };

  const handleLoginError = (error: Error) => {
    console.log(error);
  };

  const { mutate } = useSignInMutation(handleLoginSuccess, handleLoginError);

  const onSubmit = (data: SignInParams) => {
    mutate(data);
  };

  return (
    <Dialog className="w-[480px]" onClickOutside={() => setIsDialogOpen(false)}>
      <Dialog.Header className="px-6 h-16 flex items-center justify-center border-solid border-b-[1px] border-gray-300">
        <Dialog.CloseButton
          className="absolute left-6"
          onClose={() => setIsDialogOpen(false)}
        />
        <div className="text-lg font-bold">로그인</div>
      </Dialog.Header>
      <Dialog.Body className="w-full p-6 flex flex-col items-center justify-center">
        <Form<SignInParams>
          handleSubmit={(data) => onSubmit(data)}
          className="w-full flex flex-col gap-1"
        >
          <Form.Input
            name="email"
            placeholder="test@test.com"
            className="w-full h-12 ps-5 p-2 border-gray-300 rounded-md"
            required="이메일을 입력해주세요."
            validation={{
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "이메일 형식에 맞지 않습니다.",
              },
            }}
          />
          <Form.Input
            name="password"
            placeholder="********"
            className="w-full h-12 ps-5 p-2 border-gray-300 rounded-md"
            required="비밀번호를 입력해주세요."
            validation={{
              minLength: {
                value: 8,
                message: "8자리 이상 비밀번호를 사용하세요.",
              },
            }}
          />
          <Form.SubmitButton className="mt-2 w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            로그인
          </Form.SubmitButton>
        </Form>
        <div className="w-full flex justify-between items-center my-6 text-sm">
          <div className="h-px flex-1 bg-gray-300"></div>
          <div className="px-2 text-gray-500">다른 계정으로 로그인하기</div>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="w-full flex flex-col items-center justify-around gap-2">
          <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            카카오로 로그인하기
          </button>
          <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            네이버로 로그인하기
          </button>
          <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            구글로 로그인하기
          </button>
        </div>
      </Dialog.Body>
    </Dialog>
  );
}
