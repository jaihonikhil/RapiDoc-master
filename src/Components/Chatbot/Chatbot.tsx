import React, { useState } from "react";
import Chats from "../Chats/Chats";
import { analyzeNextSteps } from "../../HelperFunctions/analyzeNextSteps";
import "./Chatbot.scss";
import { Logo } from './Logo';

export interface ResponseBotObject {
  message: string;
  options?: string[];
  sender: string;
}

const Chatbot: React.FC = () => {
  const [userResponse, setUserResponse] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [botResponse, setBotResponse] = useState<ResponseBotObject>({
    message: "",
    sender: "bot"
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  // setting next step when there's response and option click
  const setNextStep = (response: string) => {
    setStep(prevState => prevState + 1);
    setSendUserResponse(response);
    let res = analyzeNextSteps(step, response);
    setBotResponse({ ...res, sender: "bot" });
    setUserResponse("");
  };

  const optionClick = (e: React.MouseEvent<HTMLElement>) => {
    let option = e.currentTarget.dataset.id;
    if (option) {
      setNextStep(option);
    }
  };

  // event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(userResponse);
  };

  return (
    <div className="chat-container">
      <Logo />
      <Chats
        userResponse={userResponse}
        botResponse={botResponse}
        sendUserResponse={sendUserResponse}
        optionClick={optionClick}
      />
      {!botResponse.options && <form onSubmit={e => handleSubmit(e)} className="form-container">
        <input
          onChange={e => handleInputChange(e)}
          value={userResponse}
        ></input>
        <button>
          <i className="far fa-paper-plane"></i>
        </button>
      </form>
      }
    </div>
  );
};

export default Chatbot;
