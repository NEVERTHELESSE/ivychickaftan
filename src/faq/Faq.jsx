import Join from "../home/join/Join";
import { Helmet } from "react-helmet";

export default function Faq() {
  const questions = [
    {
      id: 1,
      question: "Do you ship worldwide?",
      answer: "Yes",
    },
    {
      id: 2,
      question: "How do you receive international payment?",
      answer: "Through paymetn abency",
    },
    {
      id: 3,
      question: "How long will the delivery taks?",
      answer: "Locally, within 3day, internationally, within 7days",
    },
  ];

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FAQ</title>
        <link rel="canonical" href="http://localhost:5173/login" />
      </Helmet>
      <p className="text-4xl text-center text-white py-8 bg-primaryColor">
        Frequently Asked Questions
      </p>
      <div className="p-20 px-[10rem]">
        {questions.map((question) => (
          <details className="text-2xl my-4" key={question.id}>
            <summary className="list-none font-bold cursor-pointer border-t my-2 p-2">
              {question.question}
            </summary>
            <p className="text-4xl my-3">{question.answer}</p>
          </details>
        ))}
      </div>
      <Join />
    </div>
  );
}
