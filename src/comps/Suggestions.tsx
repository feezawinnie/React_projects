import { Store, Pencil, Forward } from "lucide-react";


const suggestions = [
  { text: "Find a gym near me", icon: <Store size={20} /> },
  { text: "Write my memoir's opening paragraph", icon: <Pencil size={20} /> },
  { text: "Test me on topics I've been searching", icon: <Forward size={20} /> },
];

function Suggestions() {
  return (
    <div className="w-full max-w-3xl mt-6 px-10 flex flex-col gap-2">
      {suggestions.map((item) => (
        <button
          key={item.text}
          className="flex items-center gap-4 py-3 text-gray-200 text-lg hover:text-white text-left"
        >
          {item.icon}
          <span>{item.text}</span>
        </button>
      ))}
    </div>
  );
}

export default Suggestions;