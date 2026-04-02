"use client";
import { useState } from "react";

import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import LaptopFilters from "@/components/LaptopFilters";

export default function Content({ data }: any) {
  const ITEMS_PER_PAGE = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentData = data.slice(startIndex, endIndex);
  return (
    <>


      <Card data={currentData} />

      {currentData.length > 0 && (
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </>
  );
}
