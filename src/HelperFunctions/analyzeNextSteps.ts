import { ResponseBotObject } from "../Components/Chatbot/Chatbot";


export const analyzeNextSteps = (step: number, userResponse: string): ResponseBotObject => {
  return step === 0
  ? {
    message: `Hi ${userResponse}! What's your health card #?`,
    sender: "bot"
  } : step === 1
  ? {
        message: `Perfect. What can I do for you today?`,
        options: ['Symptom checker', 'Prescription refill', 'Book an appointment'],
        sender: "bot"
      }
    : step === 2
    ? {
        message:
          "Lets start with the symptom that’s troubling you the most?",
          sender: "bot"
      }
    : step === 3
    ? {
        message:
          "How long has this been troubling you?",
        options: ['Less than one day', 'One day to one week', 'One week to one month one month to one year', 'More than one year'],
          sender: "bot"
      }
    : step === 4
    ? {
        message:
          "Where is it mainly located?",
          options:['Behind the breastbone', 'On the left side of the chest', 'On the right side of the chest', 'On both sides of the chest', 'I don’t know'],
        sender: "bot"
      }
    : step === 5
    ? {
        message: "Is it a heavy, tight or crushing feeling?",
        options: ["Yes", "No", 'I don`t know'],
        sender: "bot"
      }
    : step === 6
      ? {
          message: "How would you describe the intensity of the pain or discomfort?",
          options: [ 'Mild- does not interfere with daily activities', 'Moderate- some daily activities are limited'],
          sender: "bot"
        }
    : step === 7
    ? {
          message:"Does the feeling seem to spread from the chest into your arm, jaw, shoulder or back?",
          options: ["Yes", "No", 'I don`t know'],
          sender: "bot"
      }
    : step === 8
    ? {
        message: "Does the pain or discomfort become worse when the affected area is pressed or touched?",
        options: ["Yes", "No", 'I don`t know'],
        sender: "bot"
      }
    : step === 9
    ? {
        message: "How does engaging in activities such as walking or climbing stairs affect your chest discomfort?",
        options: ["Worsens", "No effect", "I don’t know"],
        sender: "bot"
      }
    : step === 10
    ? {
        message: "How does taking a deep breath affect the pain or discomfort?",
        options: ["Worsens", "No effect", "I don’t know"],
        sender: "bot"
      }
    : step === 11
    ? {
        message: `Do you have any other symptoms?`,
        options: ["Yes", "No"],
        sender: "bot"
      }
    : step === 12
    ? {
        message: "Please name one more symptom that’s troubling you?",
        sender: "bot"
      }
    : step === 13
    ? {
       message:"How long has this been troubling you?",
       options: ['Less than one day', 'One day to one week', 'One week to one month one month to one year', 'More than one year'],
        sender: "bot"
      }
    : step === 14 
    ? {
        message: "How bad is the breathlessness?",
        options: ['Mild- no difficulty doing normal daily activities','Moderate- difficulty doing some activities', 'Severe- daily activities are impossible', 'I don’t know'],
        sender: "bot"
      }
    : step === 15
    ? {
        message: "How does taking a deep breath affect the pain or discomfort?",
        options: ["Worsens", "No effect", "I don’t know"],
        sender: "bot"
      }
    : step === 16
    ? {
        message: "How does taking a deep breath affect the pain or discomfort?",
        options: ["Worsens", "No effect", "I don’t know"],
        sender: "bot"
      }
    : step === 17
    ? {
        message: "Do you feel short of breath when at rest?",
        options: ["Yes", "No", 'I don`t know'],
        sender: "bot"
      }
    : step === 18
    ? {
        message: "Were you suddenly overwhelmed by a feeling that something terrible is happening to you?",
        options: ["Yes", "No", 'I don`t know'],
        sender: "bot"
      }
    : step === 19
    ? {
        message: "Do you feel nervous, tense, or distressed?",
        options: ["Yes", "No", 'I don`t know'],
        sender: "bot"
      }
    : step === 20
    ? {
        message: "Do the veins of your neck stand out more than normal, even when you are sitting or standing?",
        options: ["Yes", "No", 'I don`t know'],
        sender: "bot"
      }
    : step === 21
    ? {
        message: "Is your pulse racing faster than the normal limit for your age?",
        options: ["Worsens", "No effect", "I don’t know"],
        sender: "bot"
      }
    : step === 22
    ? {
        message: "How are your symptoms changing over time?",
        options: ["They’re getting worse”, “They’re not as bad as they were”, “They’re staying about the same"],
        sender: "bot"
      }
    : step === 23
    ? {
        message: "Thank you, Maria. All done! Your report has been forwarded to the Doctor. You will hear back from the Doctor about your symptoms and receive further instructions.",
        options: ["Ok, continue!"],
        sender: "bot"
      }
    : step === 24 
    ? {
        message: " Maria, Your report has been forwarded to the Doctor. You will hear back from the Doc",
        options: ["Ok, continue!"],
        sender: "bot"
    } : 
    {
        message: "Based on your location, Toronto General Hospital is your closest recommended hospital and there are currently no COVID-19 outbreaks at this hospital",
        options: ["Ok"],
        sender: "bot"
    };
}

