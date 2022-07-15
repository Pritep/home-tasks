import { WebviewWindow } from "@tauri-apps/api/window";

const Button: React.FC<{click: () => void}> = ({click}) => (
  <button onClick={click}>Navigate</button>
);

function App() {

  const handleClick = () => {
    const tail = new WebviewWindow("tailwind", {
      title: "tailwind",
      url: "google.com"
      // url: "https://tailwindcss.com",
    });
  }
  

  return (
    <>
      <Button click={handleClick}/>
    </>
  )
}

export default App
