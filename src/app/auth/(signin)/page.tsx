"use client";
import Image from "next/image";
import { useState } from "react";
import { FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { iLoginInput } from "@/app/lib/definitions";
import { useAuth } from "@/app/hooks/useAuth";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<iLoginInput>();

  const [hidePassword, setHidePassword] = useState(true);
  const handlePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const { loginWithEP } = useAuth();
  // const handleInputChanges = (e: any) => {
  //   console.log(e.target.value || "");
  // };

  const onSubmit: SubmitHandler<iLoginInput> = (data) => {
    loginWithEP(data);
  };

  return (
    <section className="h-[430px] w-[350px] border border-white bg-white py-8 px-3 shadow-lg">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col items-center justify-between"
      >
        <div className="flex flex-col items-center">
          <Image
            src="/logomark.png"
            alt="logo"
            width={80}
            height={80}
            className="border border-black"
            priority
          />

          <div className="text-center">
            <h2 className="">welcome back</h2>
            <small>Login to your account</small>
          </div>
        </div>
        <Stack spacing={3} className="my-3">
          {/* inputs */}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiMail />
            </InputLeftElement>
            <Input
              type="text"
              // name="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
              // onChange={handleInputChanges}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiLock />
            </InputLeftElement>
            <Input
              type={hidePassword ? "password" : "text"}
              // name="password"
              placeholder="Password"
              {...register("password", { required: true })}
              // onChange={handleInputChanges}
              required
            />
            <InputRightElement onClick={handlePasswordVisibility}>
              {hidePassword ? <FiEye /> : <FiEyeOff />}
            </InputRightElement>
          </InputGroup>
        </Stack>

        <div className="flex flex-col gap-3 items-center">
          <small>
            Don&rsquo;t have an account?{" "}
            <span>
              <Link href="/auth/signup">Sign up</Link>
            </span>
          </small>

          <div
            className={`whitespace-nowrap 
         "w-fit"
        text-xs tablet:text-base hover:opacity-80 flex items-center rounded transition ease-in-out delay-150`}
          >
            <Button
              className={`capitalize w-full`}
              colorScheme="blue"
              size="sm"
              type="submit"
            >
              Login
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}
