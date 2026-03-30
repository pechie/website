import React, { useRef, useState, useEffect } from "react";
import { Document as PdfDocument, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function Document() {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-start justify-start px-6 py-16 bg-[#0a0a0a]">
      <div className="w-full max-w-[860px] mx-auto">
        <p className="text-[#6e6e73] text-xs uppercase tracking-[0.08em] mb-3">Resume</p>
        <h1 className="text-[#f5f5f7] text-[40px] font-bold tracking-[-0.02em] mb-4">
          Resume
        </h1>
        <a
          href="/Resume_01_24_21.pdf"
          download
          className="inline-block bg-[#0071e3] text-white text-sm font-medium py-3 px-6 rounded-[980px] no-underline hover:bg-[#0077ed] transition-colors duration-200 mb-8"
        >
          Download Resume
        </a>
        {/* PDF preview — hidden on mobile */}
        <div
          ref={containerRef}
          className="hidden sm:block w-full border border-white/[0.08] rounded-xl overflow-hidden"
        >
          <PdfDocument
            file="/Resume_01_24_21.pdf"
            loading={
              <div className="flex items-center justify-center h-48 text-[#6e6e73] text-sm">
                Loading...
              </div>
            }
            error={
              <div className="flex items-center justify-center h-48 text-[#6e6e73] text-sm">
                Unable to load resume. Use the download button above.
              </div>
            }
          >
            <Page
              pageNumber={1}
              width={containerWidth || 860}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </PdfDocument>
        </div>
        <p className="sm:hidden text-[#6e6e73] text-sm mt-4">
          Resume preview is not available on mobile. Use the download button above.
        </p>
      </div>
    </div>
  );
}
