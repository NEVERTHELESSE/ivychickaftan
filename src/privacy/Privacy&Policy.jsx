import Heading from "../component/heading/Heading";
import { Helmet } from "react-helmet";
import { answers } from "./answer";

export default function Privacy() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Privacy & Policy</title>
        <link rel="canonical" href="http://localhost:5173/Privacy&Policy" />
      </Helmet>
      <Heading title="Privacy & Policy" />
      <div className="py-12 px-20">
        <p className="text-4xl my-4 text-center uppercase">
          what personal data we collect and why we collect it
        </p>
        <ul>
          {answers.map((answer) => (
            <ol className="border m-6 rounded-lg px-4 py-8" key={answer.id}>
              <p className="uppercase font-bold text-2xl">{answer.queston}</p>
              <p>{answer.answer}</p>
            </ol>
          ))}
        </ul>
      </div>
    </div>
  );
}
