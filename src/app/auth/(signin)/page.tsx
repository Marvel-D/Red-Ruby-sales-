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
} from "@chakra-ui/react";
import Link from "next/link";
import { Btn } from "@/app/components/shared";

export default function SignInPage() {
  const [hidePassword, setHidePassword] = useState(true);

  const handlePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  const handleInputChanges = (e: any) => {
    console.log(e.target.value || "");
  };

  return (
    <section className="h-[430px] w-[350px] border border-white bg-white py-8 px-3 shadow-lg">
      <form className="h-full flex flex-col items-center justify-between">
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
              name="email"
              placeholder="Email Address"
              onChange={handleInputChanges}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiLock />
            </InputLeftElement>
            <Input
              type={hidePassword ? "password" : "text"}
              name="password"
              placeholder="Password"
              onChange={handleInputChanges}
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

          <Btn
            text="Login"
            route="/dashboard"
            color="blue"
            variant="solid"
            width="w-fit"
          />
        </div>
      </form>
    </section>
  );
}
