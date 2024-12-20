import Button from "./Button";

export default function ButtonGroup({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarlAllAsComplete,
  handleMarlAllAsInComplete,
}) {
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarlAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarlAllAsInComplete,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }, index) => {
        return (
          <Button key={index} onClick={onClick} type="secondary">
            {text}
          </Button>
        );
      })}
    </section>
  );
}
