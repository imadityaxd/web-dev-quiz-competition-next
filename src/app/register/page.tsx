"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [instaId, setInstaId] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted: ", name, instaId);
  };
  return (
    <div className="bg-black-100 pt-36 pb-5 px-4 rounded-lg">
      <div
        className={`${cn(
          "kanit"
        )} bg-black-100 max-w-md w-full mx-auto md:rounded-2xl p-4 md:p-8 shadow-input border border-white-200 rounded-lg`}
      >
        <h2 className="font-bold text-2xl text-purple">Provide your Name</h2>
        <p className="text-white-200 text-sm max-w-sm mt-2">
          Please, provide your info so that we will identify you with your score
          in the leaderboard.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstname"
                placeholder="Ravish"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Instagram Id</Label>
              <Input
                id="insta"
                placeholder="@cykoravish"
                type="text"
                onChange={(e) => setInstaId(e.target.value)}
              />
            </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-purple border border-purple rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit and start Quiz
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
