"use client";
import React, { useContext, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { TotalUsageContext } from "../../(context)/TotalUsageContext";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

export interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
  slugIcon: string;
}
function UsageTrack() {
  const { user } = useUser();
  const {usage, setUsage} = useContext(TotalUsageContext);
  const {updateCreditUsage} = useContext(UpdateCreditUsageContext);
  useEffect(() => {user&&getData()}, [user]);

  useEffect(()=>{
    user&&getData();
  },[updateCreditUsage&&user]);

  async function getData() {
    //@ts-ignore
    const response: HISTORY[] = await db
      .select()
      .from(AIOutput)
      //@ts-ignore
      .where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));
    getTotalUsage(response);
  }
  const getTotalUsage = (response: HISTORY[]) => {
    let total: number = 0;
    response.forEach((element) => {
      total = total + Number(element.aiResponse.length);
    });
    setUsage(total);
  };
  return (
    <div className="m-5">
      <div className="bg-primary text-white p-3 rounded-lg">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981f9] w-full rounded-full">
          <h2
            className="bg-white h-2 rounded-full"
            style={{ width: (usage / 10000) * 100 + "%" }}
          ></h2>
        </div>
        <h2 className="text-sm">{usage}/10000 credits used</h2>
      </div>
      <Button className="w-full my-3" variant={"secondary"}>
        Upgrade
      </Button>
    </div>
  );
}
export default UsageTrack;
