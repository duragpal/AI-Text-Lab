"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateSection from "./_components/TemplateSection";

function Dashboard() {
  const [SearchInput, setSearchInput] = useState<string>();
  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setSearchInput(value)} />

      <TemplateSection searchInput={SearchInput} />
    </div>
  );
}

export default Dashboard;
