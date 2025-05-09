"use client";

import { useEffect, useState } from "react";
import PhotoSlider from "@/components/PhotoSlider";

export default function DynamicTabs({ collections }) {
  const [activeTab, setActiveTab] = useState(collections[0]);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${activeTab.api}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        const allData = Array.isArray(data.data) ? data.data : [];
        const filteredData = activeTab.filter
          ? allData.filter(activeTab.filter)
          : allData;
        setContent(filteredData);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setContent([]);
      })
      .finally(() => setIsLoading(false));
  }, [activeTab]);

  const renderField = (item, field) => {
    const value = item[field.name];
    if (value == null) return null;

    if (field.type === "media") {
      const mediaArr = Array.isArray(value) ? value : [value];
      if (!mediaArr.length || !mediaArr[0]?.url) return null;
      return <PhotoSlider photos={mediaArr} />;
    }

    if (field.type === "array" && Array.isArray(value)) {
      return (
        <div className="flex gap-1 flex-wrap text-white">
          {field.label}:&nbsp;
          {value.map((el, idx) => (
            <span key={el.id || idx} className="mr-1">
              {typeof el === "object"
                ? el.name || JSON.stringify(el)
                : String(el)}
              {idx < value.length - 1 ? " |" : ""}
            </span>
          ))}
        </div>
      );
    }

    return (
      <p className="mt-2 text-white">
        <strong>{field.label || field.name}: </strong>
        {typeof value === "string" || typeof value === "number"
          ? value
          : JSON.stringify(value)}
      </p>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap items-center justify-center space-x-2 border-b border-gray-200">
        {collections.map((collection) => (
          <button
            key={collection.label}
            onClick={() => setActiveTab(collection)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab.label === collection.label
                ? "text-[#CF9056] border-b-2 border-[#CF9056]"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {collection.label}
          </button>
        ))}
      </div>

      <div className="py-4">
        {isLoading ? (
          <div className="animate-pulse text-center text-[#CF9056]">
            Загрузка...
          </div>
        ) : content.length === 0 ? (
          <div className="text-center text-[#CF9056]">Данные отсутствуют</div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-6">
            {content.map((item) => (
              <div
                key={item.id || item._id}
                className="bg-[#CF9056] hover:bg-[#c18043] duration-300 shadow-lg hover:shadow-[#CF9056] rounded-lg p-4 w-full md:w-[600px]"
              >
                {/* Контент */}
                <div className="flex flex-col gap-2 mt-4 text-white">
                  {activeTab.fields.map((field) => (
                    <div className="text-lg" key={field.name}>
                      {renderField(item, field)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
