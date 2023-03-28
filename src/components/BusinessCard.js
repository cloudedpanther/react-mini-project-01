function BusinessCard({ cardInfo }) {
  const { company, team, name, phoneNumber, email } = cardInfo;
  const titleText = `${company} ${team} ${name}`;
  const phoneText = `TEL: ${phoneNumber}`;

  return (
    <div>
      <p>{titleText}</p>
      <p>{phoneText}</p>
      <p>{email}</p>
    </div>
  );
}
export default BusinessCard;
