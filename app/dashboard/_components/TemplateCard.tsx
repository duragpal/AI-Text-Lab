import React from "react";
import { TEMPLATE } from "./TemplateSection";
import Image from "next/image";
import Link from "next/link";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className=" justify-center items-center p-5 shadow-md rounded-lg bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt="icon" width={50} height={50}></Image>
        <h2 className="font-medium text-lg">{item.name}</h2>
        <h2 className="text-grey-500 line-clamp-3">{item.desc}</h2>
      </div>
    </Link>
  );
}

export default TemplateCard;
