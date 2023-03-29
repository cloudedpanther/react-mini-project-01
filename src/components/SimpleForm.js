import { useState } from 'react';

export default function SimpleForm() {
  const [userInput, setUserInput] = useState({
    nickname: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`nickname: ${userInput.nickname}, password: ${userInput.password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>닉네임: </label>
      <input
        type="text"
        name="nickname"
        onChange={handleChange}
        value={userInput.nickname}
      />
      <br />
      <label>패스워드: </label>
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={userInput.password}
      />
      <br />
      <input type="submit" value="제출" />
    </form>
  );
}
