import { useEffect, useState } from 'react';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

export default function OnlineStore() {
  const datas = [
    {
      category: 'Sporting Goods',
      price: '$49.99',
      stocked: true,
      name: 'Football',
    },
    {
      category: 'Sporting Goods',
      price: '$9.99',
      stocked: true,
      name: 'Baseball',
    },
    {
      category: 'Sporting Goods',
      price: '$29.99',
      stocked: false,
      name: 'Basketball',
    },
    {
      category: 'Electronics',
      price: '$99.99',
      stocked: true,
      name: 'iPod Touch',
    },
    {
      category: 'Electronics',
      price: '$399.99',
      stocked: false,
      name: 'iPhone 5',
    },
    {
      category: 'Electronics',
      price: '$199.99',
      stocked: true,
      name: 'Nexus 7',
    },
  ];

  const [inputValue, setInputValue] = useState({
    keyword: '',
    onlyStocked: false,
  });

  return (
    <div>
      <SearchBar inputValue={inputValue} setInputValue={setInputValue} />
      <ProductTable productData={datas} inputValue={inputValue} />
    </div>
  );
}
