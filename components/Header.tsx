import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className="flex justify-between">
      <h1>
        <Link href="/" className="flex items-center gap-2 text-xl">
          <FontAwesomeIcon icon={faChartLine} />
          CPI REPORT
        </Link>
      </h1>
      <nav className="flex items-center gap-3">
        <Link href="/debug">Debug</Link>
        <Link href="/about">About</Link>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
