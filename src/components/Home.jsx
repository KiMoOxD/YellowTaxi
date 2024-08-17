import React from "react";
import { TextEffect } from "./TextEffect.tsx";

export default function Home() {
  return (
    <div>
      Home
      <TextEffect per="char" preset="fade">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        facere quo? Voluptatibus modi repellat earum quia deleniti nostrum
        molestias est dolorem saepe, a aliquid. Officiis corporis aperiam
        provident alias distinctio.
      </TextEffect>

      
  <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png" class="dark:hidden w-[272px] h-[572px]" alt="" />
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png" class="hidden dark:block w-[272px] h-[572px]" alt="" />
      </div>
  </div>


    </div>
  );
}
