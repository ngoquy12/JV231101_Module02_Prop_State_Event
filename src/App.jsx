import "./App.css";
import Parent_Component from "./components/Parent_Component";

function App() {
  // Tại sao lại phải sử dụng state thay cho các biến toàn cục

  const userName = "Rikkei Education";
  const age = 10;

  const users = [
    {
      id: 1,
      name: "Bình",
      age: 19,
    },
    {
      id: 2,
      name: "Phúc",
      age: 19,
    },
    {
      id: 3,
      name: "Uy",
      age: 20,
    },
  ];

  const handleClick = () => {
    console.log("Đã click 2");
  };

  return (
    <>
      <h3>Tên trong Component Cha {userName}</h3>
      <Parent_Component
        users={users}
        ageProp={age}
        userNameProp={userName}
      ></Parent_Component>

      <button onClick={() => console.log("Đã click 1")}>Click me 1</button>
      <button onClick={handleClick}>Click me 2</button>
    </>
  );
}

export default App;
