import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default function ProductTable({ productData, inputValue }) {
  const { keyword, onlyStocked } = inputValue;

  const result = productData
    .filter((data) => !onlyStocked || data.stocked)
    .filter((data) => data.name.toLowerCase().includes(keyword.toLowerCase()))
    .reduce((acc, cur) => {
      if (!acc.hasOwnProperty(cur.category)) {
        return {
          ...acc,
          [cur.category]: [cur],
        };
      }
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    }, {});

  return (
    <div>
      <div
        style={{
          display: 'flex',
        }}>
        <p
          style={{
            width: '100px',
            fontWeight: 'bold',
            margin: '10px 0px',
          }}>
          Name
        </p>
        <p
          style={{
            width: '100px',
            fontWeight: 'bold',
            margin: '10px 0px',
          }}>
          Price
        </p>
      </div>
      {Object.keys(result).map((category) => {
        return (
          <div key={category}>
            <ProductCategoryRow category={category} />
            {result[category].map((data) => (
              <ProductRow productData={data} key={data.name} />
            ))}
          </div>
        );
      })}
      {/* {categories.map((category) => {
        return (
          <div>
            <ProductCategoryRow category={category} />
            {productData
              .filter((data) => data.category === category)
              .map((data) => (
                <ProductRow productData={data} />
              ))}
          </div>
        );
      })} */}
    </div>
  );
}
