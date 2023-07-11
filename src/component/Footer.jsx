import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full my-5 px-5 h-max">
        <h1 className="font-bold text-[#261700] text-3xl mb-2">
          Pdf Summarizer
        </h1>
        <p className="w-[60%] max-[500px]:w-full font-medium font-Nunito text-base my-3">
          PDF summarizers employ algorithms that can identify important
          sentences, sections, or paragraphs within a document, and then
          condense the text while preserving the overall meaning. These tools
          often consider factors like sentence relevance, frequency of terms,
          and context to determine which information should be included in the
          summary.
        </p>
        <p className="w-[60%] max-[500px]:w-full font-medium font-Nunito text-base">
          People are looking for shortcut methods to learn ideas in lesser time.
          Even text summarizers are helping them to decide whether a book, a
          research paper, or an article is worth reading or not.{" "}
        </p>
      </div>
      <div className="w-full my-5 px-5 h-max">
        <h1 className="font-bold text-[#261700] text-3xl mb-2">
          Approaches in auto summarization:
        </h1>
        <p className="w-[60%] max-[500px]:w-full font-medium font-Nunito text-base my-3">
          Auto summarization in PDF documents can be approached through various
          techniques. Here are a few commonly used approaches:
        </p>
        <h1 className="font-bold text-[#261700] text-xl mb-2">
          Extraction-based Summarization
        </h1>
        <p className="w-[60%] max-[500px]:w-full font-medium font-Nunito text-base">
          This approach involves selecting important sentences or phrases from
          the source document and combining them to form a summary. The
          selection process may be based on criteria such as sentence relevance,
          keyword frequency, or position within the document. Extraction-based
          methods are relatively straightforward and computationally efficient
          but may result in less coherent summaries compared to other
          approaches.
        </p>
        <h1 className="font-bold text-[#261700] text-xl my-2">
          Abstractive Summarization
        </h1>
        <p className="w-[60%] max-[500px]:w-full font-medium font-Nunito text-base">
          Abstractive summarization aims to generate a summary that goes beyond
          simple sentence extraction by using natural language processing and
          understanding techniques. It involves paraphrasing and rephrasing the
          original content to create concise and coherent summaries. Abstractive
          methods can produce more human-like summaries but are generally more
          complex and computationally intensive.
        </p>
      </div>
      <div className="w-full my-5 px-5 h-max">
        <h1 className="font-bold text-[#261700] text-3xl mb-2">
          Important features of this PDF<br></br> summarizer:
        </h1>
        <div className="grid grid-rows-3 w-max grid-cols-2 mt-3 font-Nunito max-[500px]:w-full  border-2 border-[#261700]">
          <span className="border-r-2 border-[#261700] border-b-2 p-3">
            🤖 AI-Powered
          </span>
          <span className="  border-b-2 border-[#261700] p-2">
            Sums up text with Advanced AI
          </span>
          <span className="border-r-2 border-[#261700] border-b-2 p-3">
            📕 Summarizes
          </span>
          <span className=" border-b-2 border-[#261700] p-3">
            Essays, papers & documents
          </span>
          <span className="border-r-2 border-[#261700] p-3">💰 Price</span>
          <span className=" p-3"> 100% Free Unlimited Words</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
