import { Main } from "./pages/Main";
import { Database } from "./providers/Database";

function App() {
  return (
    <Database>
      <Main />
    </Database>
  );
}

export default App;
