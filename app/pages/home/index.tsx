import { type MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Template' },
    { name: 'description', content: 'Remix Panda Template' },
  ];
};

export default function Index() {
  return <div>home</div>;
}
