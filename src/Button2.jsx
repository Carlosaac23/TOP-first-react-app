function Button2({
  text = 'Click Me!',
  color = 'blue',
  fontSize = 12,
  handleClick,
}) {
  const buttonStyle = {
    color: color,
    fontSize: `${fontSize}px`,
  };

  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
}

export default function ButtonClick() {
  function handleButtonClick(url) {
    window.location.href = url;
  }

  return (
    <div>
      <Button2
        handleClick={() => handleButtonClick('https://www.google.com')}
      />
    </div>
  );
}
