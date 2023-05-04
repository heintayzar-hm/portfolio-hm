import { useEffect, useState } from "react";

interface PropTextWriterType {
    characters: string;
}

const TextWriter = ({characters} :PropTextWriterType) => {
    const [text, setText] = useState({
        characters: "",
        index: 0
    });

    useEffect(() => {
        if (text.characters.length == characters.length) {
            return;
      }
      const interval = setInterval(() => {
          setText(prevText => ({
              characters: prevText.characters + characters[prevText.index],
              index: prevText.index + 1,
      }));
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

    return (
        <div id="text-container" >
        <p id="text" className="sm:block hidden">{text.characters}</p>
      </div>
    );
}


export default TextWriter;
