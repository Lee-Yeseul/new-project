import { CompoundItem } from "@src/types/common";
import { createContext, useContext } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormProps<T extends FieldValues> = CompoundItem & {
  handleSubmit: SubmitHandler<T>;
  schema: z.ZodType<T>;
};

type InputProps = CompoundItem & {
  name: string;

  placeholder: string;
};

/**
 * @TODO: formProvider type 만들기
 */
// type FormProvider<TFieldValues extends FieldValues = FieldValues> = {
//   errors: FieldErrors<TFieldValues>;
//   // reset: UseFormReset<TFieldValues>;
//   register: UseFormRegister<TFieldValues>;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormContext = createContext<any>(null);

export default function Form<Schema extends FieldValues>({
  children,
  className,
  handleSubmit: onSumbit,
  schema,
}: FormProps<Schema>) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const providerValue = { register, watch, errors };

  return (
    <FormContext.Provider value={providerValue}>
      <form onSubmit={handleSubmit(onSumbit)} className={className}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

function Input({ className, name, placeholder }: InputProps) {
  const { register, errors } = useContext(FormContext);
  return (
    <div>
      <input
        className={`border-1 border-solid focus:outline-none focus:border-gray-400 focus:border-1 ${className}`}
        placeholder={placeholder}
        type={name}
        {...register(name)}
      />
      {errors[name] && (
        <small role="alert" className="text-sm text-red-500">
          {errors[name].message}
        </small>
      )}
    </div>
  );
}

function SubmitButton({ className, children }: CompoundItem) {
  return (
    <button type="submit" className={className}>
      {children}
    </button>
  );
}

Form.Input = Input;
Form.SubmitButton = SubmitButton;
