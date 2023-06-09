// 리덕스 구현 후 조건부 렌더

const HanbugerMenu = (porps) => {
  const width =porps.width;
  const height =porps.height;
  const fill =porps.fill;
  const className =porps.className;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 22H32M2 12H32M2 2H32"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HanbugerMenu;
