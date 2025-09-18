import React, { useState, useMemo } from "react";
import NavBar from "../components/Navbar";
import HelloCard from "../components/HelloCard";
import { contributorsData } from "../data/contributorsData";

const ContributorsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Filter contributors based on search term
  const filteredContributors = useMemo(() => {
    return contributorsData.filter(contributor =>
      contributor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredContributors.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentContributors = filteredContributors.slice(startIndex, endIndex);

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EDF2F4]">
      {/* NavBar Section */}
      <div className="mt-5">
        <NavBar />
      </div>
      
      {/* Contributors Content */}
      <div className="flex-1 py-6 sm:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-6 sm:mb-8 text-[#2B2D42]">
            OpenHello Contributors
          </h1>

          {/* Search Bar */}
          <div className="max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search contributors by name..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-3 pl-12 pr-12 text-gray-700 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ef233c] focus:border-transparent shadow-lg transition-all duration-200 placeholder-gray-400"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Results Info */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base font-medium text-gray-600">
              {searchTerm ? (
                <>
                  Showing {filteredContributors.length} result{filteredContributors.length !== 1 ? 's' : ''} 
                  for "<span className="font-semibold text-[#ef233c]">{searchTerm}</span>"
                  {filteredContributors.length > itemsPerPage && (
                    <span className="block sm:inline sm:ml-1 mt-1 sm:mt-0">
                      (Page {currentPage} of {totalPages})
                    </span>
                  )}
                </>
              ) : (
                <>
                  Showing {contributorsData.length} total contributors
                  {contributorsData.length > itemsPerPage && (
                    <span className="block sm:inline sm:ml-1 mt-1 sm:mt-0">
                      (Page {currentPage} of {totalPages})
                    </span>
                  )}
                </>
              )}
            </p>
          </div>

          {/* Contributors Grid */}
          {currentContributors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6  lg:gap-8 justify-items-center mb-8 sm:mb-12">
              {currentContributors.map((contributor, index) => (
                <HelloCard
                  key={`${contributor.name}-${startIndex + index}`}
                  name={contributor.name}
                  photoUrl={contributor.photoUrl}
                  githubUrl={contributor.githubUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-12 px-4">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                No contributors found
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mb-4">
                {searchTerm ? `No contributors match "${searchTerm}"` : "No contributors available"}
              </p>
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  className="bg-[#ef233c] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm sm:text-base"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#ef233c] shadow-sm'
                }`}
              >
                Previous
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((pageNumber, index) => (
                <button
                  key={index}
                  onClick={() => pageNumber !== '...' && handlePageChange(pageNumber)}
                  disabled={pageNumber === '...'}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 min-w-[2.5rem] ${
                    pageNumber === currentPage
                      ? 'bg-[#ef233c] text-white shadow-md'
                      : pageNumber === '...'
                      ? 'bg-transparent text-gray-400 cursor-default'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#ef233c] shadow-sm'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200 hover:border-[#ef233c] shadow-sm'
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContributorsPage;