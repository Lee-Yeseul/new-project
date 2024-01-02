import Form from "@src/components/common/Form";
import { SignUpSchema, signUpSchema } from "@src/schema/auth";
import { useSignUpMutation } from "@src/hooks/querys/auth";

export default function SignUpPage() {
  const handleSignUpError = (error: Error) => {
    console.log(error);
  };

  const { mutate } = useSignUpMutation(handleSignUpError);

  const onSubmit = (data: SignUpSchema) => {
    mutate(data);
  };
  return (
    <div className="w-full h-[calc(100vh-156px)] flex justify-center items-center">
      <div className="w-[420px] h-full flex flex-col justify-center">
        <h2 className="font-semi-bold text-xl mb-4 text-center">회원가입</h2>
        <Form
          schema={signUpSchema}
          handleSubmit={(data) => onSubmit(data)}
          className="w-full flex flex-col gap-1"
        >
          <div className="mb-2">
            <label className="text-gray-600">이메일</label>
            <Form.Input
              name="email"
              placeholder="이메일"
              className="w-full h-12 ps-5 mt-1 border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-2">
            <label className="">비밀번호</label>
            <Form.Input
              name="password"
              placeholder="비밀번호"
              className="w-full h-12 ps-5 mt-1 border-gray-300 rounded-md"
            />
            <div role="alert" className="text-sm text-gray-400 mt-2">
              비밀번호는 8자리 이상 15자리 이하로 입력해주세요.
            </div>
          </div>
          <div className="mb-2">
            <label className="">비밀번호 확인</label>
            <Form.Input
              name="confirmPassword"
              type="password"
              placeholder="비밀번호 확인"
              className="w-full h-12 ps-5 mt-1 border-gray-300 rounded-md"
            />
          </div>

          <Form.SubmitButton className="mt-2 w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            회원가입
          </Form.SubmitButton>
        </Form>
        <div className="w-full flex justify-between items-center my-6 text-sm">
          <div className="h-px flex-1 bg-gray-300"></div>
          <div className="px-2 text-gray-500">간편 회원가입</div>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <div className="w-full flex flex-col items-center justify-around gap-2">
          <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            카카오로 회원가입
          </button>
          <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            네이버로 회원가입
          </button>
          <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            구글로 회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
