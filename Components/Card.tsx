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
      <div className={`h-auto w-48 rounded-lg border-4 ${props.twColorBorder}`}>
        <div className="flex flex-row items-center justify-center gap-2 p-2">
          <FontAwesomeIcon icon={props.icon} className={`text-2xl ${props.twColorPrimary}`} />
          <div className={`text-2xl font-bold ${props.twColorPrimary}`}>{props.title}</div>
        </div>
        <div className="p-4 text-center text-3xl font-semibold text-slate-700">{props.value}%</div>
      </div>
    </Link>
  );
}
