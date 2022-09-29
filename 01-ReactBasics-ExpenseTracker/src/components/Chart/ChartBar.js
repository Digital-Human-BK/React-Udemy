import './ChartBar.css';

const ChartBar = ({ label, maxValue, value }) => {
  let barrFillHeight = '0%';

  if (maxValue > 0) {
    barrFillHeight = Math.round((value / maxValue) * 100) + '%';
  }
  return (
    <li className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barrFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </li>
  );
};

export default ChartBar;
