import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력해주세요.")
    .email("이메일 형식을 입력해주세요"),
  password: z
    .string()
    .min(1, "비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 8글자 이상으로 입력해주세요"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
