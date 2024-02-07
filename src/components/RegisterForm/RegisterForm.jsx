import { useState } from 'react';

import {
  Form,
  FormContainer,
  Label,
  Input,
  Button,
} from './RegisterForm.styled';

import { getRequestToken, createSessionId } from 'service/api';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      // Отримуємо токен
      const requestToken = await getRequestToken();
      console.log(requestToken);

      // За необхідності, ви можете перевірити, чи отримано токен, перед тим як створювати сесійний ідентифікатор
      if (requestToken) {
        // Створюємо сесійний ідентифікатор за допомогою токену
        const sessionId = await createSessionId(requestToken);
        console.log(sessionId);
        // Тепер можна використовувати сесійний ідентифікатор для роботи з обліковими записами користувачів
      }
    } catch (error) {
      console.error('Помилка при реєстрації:', error);
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormContainer>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              minLength={2}
              maxLength={20}
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="Name"
              title="Username can only contain letters"
              pattern="[a-zA-Zа-яА-ЯІіЇїЄє ]+(([' \-][a-zA-Zа-яА-ЯІіЇїЄє ])?[a-zA-Zа-яА-ЯІіЇїЄє])+$"
            />
          </Label>
        </FormContainer>

        <FormContainer>
          <Label>
            Password
            <Input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder="*******"
              minLength={7}
              title="Minimum 7 characters, including numbers and symbols"
            />
          </Label>
        </FormContainer>

        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};
