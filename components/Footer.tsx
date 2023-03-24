import { getBuildInfo } from '@/utils/buildInfo';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Footer() {
  const buildInfo = getBuildInfo();
  return (
    <footer className="flex items-center justify-between">
      <div className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Nicholas Jordan
      </div>

      <div className="flex items-center">
        <div className=" flex flex-col items-end text-sm text-gray-600 dark:text-gray-400">
          <span className="font-bold">Last built on</span>
          <span>
            <time dateTime={buildInfo.time.raw}>{buildInfo.time.formatted} </time>
            <Link
              href={`https://github.com/nicjay/cpi-report/commit/${buildInfo.hash}`}
              className="underline"
            >
              ({buildInfo.hash})
            </Link>
          </span>
        </div>
        <a
          href="https://github.com/nicjay/cpi-report"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="p-2 text-4xl text-gray-600 transition hover:text-black dark:text-gray-400 hover:dark:text-white"
          />
        </a>
      </div>
    </footer>
  );
}
