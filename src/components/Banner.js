import React, { useState } from 'react';

const Banner = () => {
  const [visible, setVisible] = useState(true);

  const handleCouponReceive = () => {
    return alert('10% 할인 쿠폰에 당첨 되었습니다.');
  };

  const handleBannerClose = (e) => {
    e.stopPropagation();
    setVisible(false);
  };

  return (
    visible && (
      <div
        style={{
          backgroundColor: 'orange',
          fontWeight: 'bold',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
        onClick={handleCouponReceive}>
        이 곳을 클릭해서 쿠폰을 받아가세요.
        <button onClick={handleBannerClose}>닫기</button>
      </div>
    )
  );
};

export default Banner;
