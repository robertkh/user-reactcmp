import UserButton from "./new-user/UserButton";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";
import { LngContextProvider } from "./new-user/context/LngContext";
import { NameContextProvider } from "./new-user/context/NameContext";

function App() {
  return (
    <div>
      <LngContextProvider>
        <NameContextProvider>
          <UserButton />
        </NameContextProvider>
      </LngContextProvider>
    </div>
  );
}

export default App;
