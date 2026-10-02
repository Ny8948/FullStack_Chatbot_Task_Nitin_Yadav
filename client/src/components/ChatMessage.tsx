import type { ChatMessage as ChatMessageType } from "../types/chat";

interface Props {
  message: ChatMessageType;
  onSuggestionClick: (suggestion: string) => void;
}

const ChatMessage = ({
  message,
  onSuggestionClick,
}: Props) => {
  return (
    <div className={`chat-message ${message.sender}`}>

      <div className="message-bubble">
        {message.text}
      </div>

      {message.sender === "bot" &&
        message.suggestions &&
        message.suggestions.length > 0 && (
          <div className="chat-suggestions">

            {message.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() =>
                  onSuggestionClick(suggestion)
                }
              >
                {suggestion}
              </button>
            ))}

          </div>
        )}

    </div>
  );
};

export default ChatMessage;