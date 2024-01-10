import React from "react";

const Card = () => {
  const cardData = [
    {
      title: "basic",
      spaceAmount: "100GB",
      price: "$1.99/Month",
      buttonText: "Purchase",
    },
    {
      title: "basic",
      spaceAmount: "100GB",
      price: "$1.99/Month",
      buttonText: "Purchase",
    },
    {
      title: "basic",
      spaceAmount: "100GB",
      price: "$1.99/Month",
      buttonText: "Purchase",
    },
  ];

  const descriptionOfCardData = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      ),
      text: `100 GB of storage`,
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      ),
      text: `100 GB of storage`,
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      ),
      text: `100 GB of storage`,
    },
  ];
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col gap-10 md:flex-row my-6 md:my-0 space-y-6 md:space-y-0 md:sapce-x-6">
        {/* first card */}
        {cardData.map((item, index) => (
          <div
            key={index}
            className="border-4 border-indigo-800 text-black rounded-xl"
          >
            <div className="px-8 mx-3 mt-3 rounded-t-xl">
              <div className="text-center uppercase">{item.title}</div>
              <h2 className="mt-6 text-5xl text-center">{item.spaceAmount}</h2>
              <h3 className="mt-2 text-center">{item.price}</h3>
              <div className="flex justify-center">
                <a
                  href=""
                  className="inline-block px-10 py-3 my-6 text-center font-bold border border-indigo-800 rounded-lg hover:bg-indigo-800
                hover:border-indigo-800
                hover:text-white
                duration-200"
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
            <div class="border border-indigo-700"></div>
            <div className="p-1 mx-3 mb-3 rounded-b-xl">
              {descriptionOfCardData.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center space-y-2 pt-1 pb-1"
                >
                  <div className="flex justify-center">
                    {item.svg}
                    <span className="text-sm ml-1">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
