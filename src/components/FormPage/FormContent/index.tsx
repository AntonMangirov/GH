const FormContent = () => {
  const { values, nameChange, emailChange, messageChange } = FormData();

  return (
    <form>
      <Input
        type="text"
        id="name"
        label="Имя"
        value={values.name}
        onChange={nameChange}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        value={values.email}
        onChange={emailChange}
      />
      <Textarea
        id="message"
        label="Сообщение"
        value={values.message}
        onChange={messageChange}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};
