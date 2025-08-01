"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { chatSession } from "@/utils/AIModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import {  UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
interface PROPS {
  params: {
    "template-slug": string;
  };
}
function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug == props.params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAIOutput] = useState<string>("");
  const {user} = useUser()
  const { usage} = React.useContext(TotalUsageContext);
  const {setUpdateCreditUsage} = React.useContext(UpdateCreditUsageContext);
  const router = useRouter();
  
  // ADD ALERT FOR USAGE LIMIT 
  const generateAiContent = async (formData: any) => {
    setLoading(true);
    if(usage>= 10000){
      setAIOutput("You have reached your usage limit. Please upgrade your plan.");
      setLoading(false);
      router.push("/dashboard/billing");
      return;
        }
        
    const promptTemplate = selectedTemplate?.aiPromptTemplate;
  
    if (!promptTemplate) {
      setAIOutput("Error: Prompt template not found for the selected item.");
      setLoading(false);
      return ;
    }
  
   
    let finalPrompt = promptTemplate;
   
  console.log(formData);
    
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const placeholder = `{${key}}`;
        finalPrompt = finalPrompt.replace(new RegExp(placeholder, "g"), formData[key]);
      }
    }
    console.log(finalPrompt);
  
    const result = await chatSession.sendMessage(finalPrompt);
    setAIOutput(result.response.text());
    await saveInDb(formData, selectedTemplate?.slug,result.response.text(),selectedTemplate?.icon);
    
    setLoading(false);

    setUpdateCreditUsage(Date.now())
  };

  const saveInDb = async(formData:any,slug:any,aiResponse:string,slugIcon:string)=>{
    const result = await db.insert(AIOutput).values({
      formData: JSON.stringify(formData),
      templateSlug: slug ?? "",
      aiResponse: aiResponse ?? "",
      createdBy: user?.primaryEmailAddress?.emailAddress ?? "", // Assuming user is logged in
      createdAt: moment().format('DD/MM/YYYY'),
      slugIcon: slugIcon ,
    });
    console.log("Data saved in DB:", result);
  }


  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => generateAiContent(v)}
          loading={loading}
        />

        {/* Output Section  */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent;
