import {
  faAngleDown,
  faAngleUp,
  faBolt,
  faCartShopping,
  faChartLine,
  faGasPump
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import { useState } from 'react';
import Card from '../components/Card';
import ThemeSwitch from '../components/ThemeSwitch';
import { loadData } from '../utils/load-data';

type HomeProps = {
  data: {
    rawAll: any;
    cpi: string;
    food: string;
    energy: string;
    gas: string;
  };
};

export default function Home(props: HomeProps) {
  const [showDebug, setShowDebug] = useState(false);
  return (
    <div>
      <Head>
        <title>CPI Report</title>
        <meta name="description" content="U.S. Inflation Tracking By Month" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-4xl">
        <div className="flex flex-row justify-between py-4">
          <h1 className="text-3xl font-bold text-slate-700 dark:text-slate-200">CPI Report</h1>
          <ThemeSwitch />
        </div>
        <h2 className="p-8 text-center text-2xl">Previous 12 Months</h2>
        <div className="grid grid-cols-4 gap-4">
          <Card
            title="CPI"
            value={props.data.cpi}
            icon={faChartLine}
            twColorPrimary="text-blue-500"
            twColorBorder="border-blue-300"
          />
          <Card
            title="Food"
            value={props.data.food}
            icon={faCartShopping}
            twColorPrimary="text-green-500"
            twColorBorder="border-green-300"
          />
          <Card
            title="Energy"
            value={props.data.energy}
            icon={faBolt}
            twColorPrimary="text-yellow-500"
            twColorBorder="border-yellow-300"
          />
          <Card
            title="Gas"
            value={props.data.gas}
            icon={faGasPump}
            twColorPrimary="text-orange-500"
            twColorBorder="border-orange-300"
          />
        </div>
        <div className="p-8 text-center text-lg text-slate-700 dark:text-slate-200">
          Data Sourced From <a href="https://www.bls.gov/">U.S. BUREAU OF LABOR STATISTICS</a>
        </div>

        <button
          className="rounded-lg border-2 border-slate-500 bg-gray-900 p-2  font-semibold text-white"
          onClick={() => setShowDebug(!showDebug)}
        >
          {showDebug ? (
            <div className="flex items-center gap-2">
              Hide Debug <FontAwesomeIcon icon={faAngleUp} />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              Show Debug <FontAwesomeIcon icon={faAngleDown} />
            </div>
          )}
        </button>

        {showDebug && (
          <pre className="mt-4 rounded-lg bg-gray-800 p-4 text-white">
            {JSON.stringify(props.data.rawAll, null, 2)}
          </pre>
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await loadData();

  return {
    props: { data }
  };
}
