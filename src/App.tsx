import { useState } from "react";
import Alert from "./components/Alert";
import PrimaryButton from "./components/PrimaryButton";

function App() {
  const [alert, setAlert] = useState(false);
  return (
    <div>
      <Alert
        active={alert}
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
      </Alert>
      <PrimaryButton
        color="warning"
        onClick={() => {
          setAlert(true);
          console.log(alert);
        }}
      >
        Alert
      </PrimaryButton>
    </div>
  );
}

export default App;
