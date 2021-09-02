import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentLedStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentLedStyle}>お元気ですか?</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
