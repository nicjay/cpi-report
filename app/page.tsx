import { faBolt, faCartShopping, faChartLine, faGasPump } from '@fortawesome/free-solid-svg-icons';
import Card from '../components/Card';
import { getData } from '../utils/data';

export default async function Home() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="p-8 text-center text-2xl">Previous 12 Months</h2>
      <div className="grid grid-cols-4 gap-4">
        <Card
          title="CPI"
          value={data.cpi}
          icon={faChartLine}
          twColorPrimary="text-blue-500"
          twColorBorder="border-blue-300"
        />
        <Card
          title="Food"
          value={data.food}
          icon={faCartShopping}
          twColorPrimary="text-green-500"
          twColorBorder="border-green-300"
        />
        <Card
          title="Energy"
          value={data.energy}
          icon={faBolt}
          twColorPrimary="text-yellow-500"
          twColorBorder="border-yellow-300"
        />
        <Card
          title="Gas"
          value={data.gas}
          icon={faGasPump}
          twColorPrimary="text-orange-500"
          twColorBorder="border-orange-300"
        />
      </div>
      <div className="p-8 text-center text-lg text-slate-700 dark:text-slate-200">
        Data Sourced From <a href="https://www.bls.gov/">U.S. BUREAU OF LABOR STATISTICS</a>
      </div>
    </div>
  );
}
