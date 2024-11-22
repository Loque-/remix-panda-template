import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import styles from './index.css?url';
import { LinksFunction } from '@remix-run/node';
import { css } from 'styled-system/css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export const IMAGE_URL =
  import.meta.env.PUBLIC_IMAGE_URL || '//directus-toril.loque.net/assets';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className={css({ border: 'solid 1px green' })}>
          {children}
          <div
            className={css({
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'red',
            })}
          >
            <div className={css({ background: 'blue' })} />
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
