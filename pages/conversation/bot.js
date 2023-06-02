import styles from "./bot.module.css"
import { useEffect } from "react";

export default function ChatBot() {
  const bot_url = process.env.URL_BOT;
  useEffect(() => {
    const handleSizeChange = (event) => {
      const { width, height } = event.data;
      const iframe = document.getElementById('myIframe');

      if (iframe) {
        iframe.style.width = width;
        iframe.style.height = height;
      }
    };

    window.addEventListener('message', handleSizeChange);

    return () => {
      window.removeEventListener('message', handleSizeChange);
    };
  }, []);
  const handleError=()=>
  {
    const iframe = document.getElementById('myIframe');

    if (iframe) {
      iframe.style.width = "0px";
      iframe.style.height = "0px";
    }
  };
  
  return (
    <iframe
      id="myIframe"
      className={styles.bot}
      src={bot_url}
      onError={handleError}
    ></iframe>
  );
}