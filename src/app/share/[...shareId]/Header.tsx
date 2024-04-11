import Icons from 'components/icons';
import LanguageButton from 'components/input/LanguageButton';
import SettingsButton from 'components/input/SettingsButton';
import ThemeButton from 'components/input/ThemeButton';
import Link from 'next/link';
import { Icon, Text } from 'react-basics';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="https://analytics.fluxinteractive.com.au" className={styles.title}>
          <Icon size="lg">
            <Icons.Logo />
          </Icon>
          <Text>FLUX</Text>
        </Link>
      </div>
      <div className={styles.buttons}>
        <ThemeButton />
        <LanguageButton />
        <SettingsButton />
      </div>
    </header>
  );
}

export default Header;
