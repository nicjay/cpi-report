import { faBolt, faCartShopping, faChartLine, faHouse } from '@fortawesome/free-solid-svg-icons';

import Chart from '@/components/Chart';
import { getData } from '@/utils/data';
import Card from '../components/Card';

export default async function Home() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="my-4 text-lg text-gray-500 dark:text-gray-400">
        12 Month percentage change, selected categories
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <Card
          title="All items"
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
          title="Shelter"
          value={data.shelter}
          icon={faHouse}
          twColorPrimary="text-purple-500"
          twColorBorder="border-purple-300"
        />
      </div>
      <h2 className="my-4 pt-8 text-lg text-gray-500 dark:text-gray-400">
        12 Month percentage change, all items, past 20 years
      </h2>
      <div className="h-96 w-full">
        <Chart historicalData={data.cpiHistory} />
      </div>
      <div className="text-md py-32 text-center text-slate-700 dark:text-slate-200">
        Data Sourced From <a href="https://www.bls.gov/">U.S. BUREAU OF LABOR STATISTICS</a>
      </div>
    </div>
  );
}
