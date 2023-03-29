export default function ProductRow({ productData }) {
  const { name, price } = productData;
  return (
    <div
      style={{
        display: 'flex',
      }}>
      <p
        style={{
          width: '100px',
          margin: '5px 0px',
        }}>
        {name}
      </p>
      <p
        style={{
          width: '100px',
          margin: '5px 0px',
        }}>
        {`${price}`}
      </p>
    </div>
  );
}
