import { useEffect, useState } from "react";

function Effect() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    setDateTime(new Date());
  }, []);

  useEffect(() => {
    handleUpdatTime();
  }, []);
  async function handleUpdatTime() {
    await new Promise((resolve) => setTimeout(resolve(), 3000));
  }
  return (
    <>
      <h1>{dateTime.toLocaleString()}</h1>
    </>
  );
}

export default Effect;
