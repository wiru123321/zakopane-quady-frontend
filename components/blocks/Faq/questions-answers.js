'use client';
import delve from 'dlv';
import 'github-markdown-css';
import { act, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const QuestionsAnswers = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      {items &&
        items.map((item, index) => (
          <>
            <div
              key={`faq-${index}`}
              className="rounded-3xl mb-3 p-6 cursor-pointer bg-gray-50 shadow-lg"
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              <div className="flex items-center justify-between gap-6">
                <h2 className="text-lg font-jakarta font-bold font-heading">
                  {delve(item, 'question')}
                </h2>
                <button
                  className={`transform hover:text-opacity-70 ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  } transition duration-200 w-6 h-6`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M19.5 8.25L12 15.75L4.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`grid text-sm text-black overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <ReactMarkdown
                    children={delve(item, 'answer')}
                    linkTarget="_blank"
                    className="font-jakarta text-lg"
                  ></ReactMarkdown>
                </div>
              </div>
            </div>
          </>
        ))}
    </>
  );
};

QuestionsAnswers.defaultProps = {};

export default QuestionsAnswers;
