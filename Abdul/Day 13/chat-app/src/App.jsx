import UserPanel from "./components/UserPanel";
import ChatBox from "./components/ChatBox";
import {ChatProvider} from "./context/ChatContext";

const App = () => {
  return (
    <ChatProvider>
      <div className="flex h-screen p-4 bg-gray-100">
        <UserPanel name="Tanish" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s" />
        <ChatBox />
        <UserPanel name="Maneesh" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeKk7u0IDsTcjVWsYyWDNti0Xl2vsEFB5Mg&s" />
      </div>
    </ChatProvider>
  );
};

export default App;




