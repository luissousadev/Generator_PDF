'use client'
import PDFViewerComponent from "@/app/components/pdf/pdfView";

export default function Home() {
  return (
    <>
      <div>
        <div className="flex w-full justify-center"> Home</div>
        <div className="flex justify-center w-screen h-screen">
          <PDFViewerComponent></PDFViewerComponent>
        </div>
      </div>
    </>
  );
}
