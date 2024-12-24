import { useState } from "react";

export default function Magnifier({ src }) {
  const [showImage, setShowImage] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function handleShowImage(e) {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition({ x, y });
    setCursorPosition({ x: e.pageX - left, y: e.pageY - top });
  }

  return (
    <div className="flex">
      <img
        src={src}
        className="w-[30rem] h-[36rem]"
        onMouseEnter={() => setShowImage(true)}
        onMouseMove={handleShowImage}
        onMouseLeave={() => setShowImage(false)}
      />
      {showImage && (
        <div
          className="ml-5"
          style={{
            left: `${cursorPosition.x - 100}px`,
            top: `${cursorPosition.y - 100}px`,
            pointerEvents: "none",
          }}
        >
          <div
            className="h-[36rem] w-[30rem]"
            style={{
              background: `url(${src})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
