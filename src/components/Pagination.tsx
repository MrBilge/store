type PaginationProps = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  return (
    <div className="w-full col-span-full flex justify-center gap-5 mt-10">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Geri
      </button>

      <div className="flex flex-col justify-center">
        <span className="text-sm">
          {currentPage} / {totalPages}
        </span>
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        İleri
      </button>
    </div>
  );
}
