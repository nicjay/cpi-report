import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type CardProps = {
  title: string;
  value: string;
  twColorPrimary: string;
  twColorBorder: string;
  icon: IconDefinition;
};

export default function Card(props: CardProps) {
  return (
    <Link href={'/'}>
      <div
        className={`w-42 h-auto rounded-lg border-4 ${props.twColorBorder} transition duration-300 hover:bg-slate-100 dark:hover:bg-slate-700`}
      >
        <div className="flex flex-row items-center justify-center gap-2 p-2">
          <FontAwesomeIcon icon={props.icon} className={`text-2xl ${props.twColorPrimary}`} />
          <div className={`text-2xl font-bold ${props.twColorPrimary}`}>{props.title}</div>
        </div>
        <div className="p-4 text-center text-3xl font-semibold text-slate-700 dark:text-slate-200">
          {props.value}%
        </div>
      </div>
    </Link>
  );
}
