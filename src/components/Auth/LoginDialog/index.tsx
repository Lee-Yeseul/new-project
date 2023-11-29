import Dialog from "@src/components/common/Dialog";

interface LoginDialogProps {
  setIsDialogOpen: (isDialogOpen: boolean) => void;
}
export default function LoginDialog({ setIsDialogOpen }: LoginDialogProps) {
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
        <form className="w-full">
          <div className="mb-2">
            <input
              className="w-full h-12 p-2 border-1 border-solid border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:rounded-md focus:border-1"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full h-12 p-2 border-1 border-solid border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:rounded-md focus:border-1"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <button className="w-full h-12 border-solid border-gray-400 border-1 rounded-md hover:bg-gray-50">
            로그인
          </button>
        </form>

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
