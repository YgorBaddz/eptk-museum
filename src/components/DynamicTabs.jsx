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
      .then((data) => setContent(Array.isArray(data.data) ? data.data : []))
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
        <ul className="list-disc ml-5 mt-2">
          {value.map((el, idx) => (
            <li key={el.id || idx}>
              {typeof el === "object"
                ? el.name || JSON.stringify(el)
                : String(el)}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p className="mt-2 text-gray-600">
        <strong>{field.label || field.name}: </strong>
        {typeof value === "string" || typeof value === "number"
          ? value
          : JSON.stringify(value)}
      </p>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex space-x-2 border-b border-gray-200">
        {collections.map((collection) => (
          <button
            key={collection.api}
            onClick={() => setActiveTab(collection)}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab.api === collection.api
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {collection.label}
          </button>
        ))}
      </div>

      <div className="py-4">
        {isLoading ? (
          <div className="animate-pulse text-center text-gray-500">
            Загрузка...
          </div>
        ) : content.length === 0 ? (
          <div className="text-center text-gray-500">Данные отсутствуют</div>
        ) : (
          <div className="space-y-4">
            {content.map((item) => (
              <div
                key={item.id || item._id}
                className="p-4 bg-white rounded-lg shadow"
              >
                {activeTab.fields.map((field) => (
                  <div key={field.name}>{renderField(item, field)}</div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
