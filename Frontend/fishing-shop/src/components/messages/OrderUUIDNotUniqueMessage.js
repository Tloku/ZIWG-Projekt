import { Message } from "primereact/message";

const OrderUUIDNotUniqueMessage = () => {
  return (
    <div>
      <Message
        severity="warn"
        text="Nie wygenerowano unikalnego kodu zamówienia. Spróbuj złożyć zamówienie ponownie później"
      />
    </div>
  );
};

export default OrderUUIDNotUniqueMessage;
