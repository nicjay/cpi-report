import { getData } from '@/utils/data';

export const metadata = {
  title: 'Debug'
};

export default async function Debug() {
  const data = await getData();

  return (
    <pre className="mt-4 rounded-lg bg-gray-800 p-4 text-white">
      {JSON.stringify(data.rawAll, null, 2)}
    </pre>
  );
}
