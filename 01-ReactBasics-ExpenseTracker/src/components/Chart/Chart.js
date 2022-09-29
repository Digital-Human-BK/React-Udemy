import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <ul className='chart'>
      {dataPoints.map((dp) => (
        <ChartBar
          key={dp.label}
          value={dp.value}
          label={dp.label}
          maxValue={totalMax}
        />
      ))}
    </ul>
  );
};

export default Chart;
