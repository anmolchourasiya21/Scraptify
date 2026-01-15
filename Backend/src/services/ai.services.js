import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});


async function generateNoteContent(text){
    const contents = [
      { text: "Convert the following content into handwritten-style study notes." },
      {rule: "Short lines (max 35 characters), Use headings, Use bullet points, Leave blank lines between sections, Insert [PAGE_BREAK] for new pages, Output JSON only",}
    ];
  
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
    });
    return (response.text);
  }

module.exports = generateNoteContent