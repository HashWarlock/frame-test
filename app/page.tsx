import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['Next image'],
  image: 'https://hash-frame-test.vercel.app/phala-network.svg',
  post_url: 'https://hash-frame-test.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'hash-frame-test.vercel.app',
  description: 'LFG',
  openGraph: {
    title: 'hash-frame-test.vercel.app',
    description: 'LFG-SVG',
    images: ['https://hash-frame-test.vercel.app/phala-network.svg'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>$HASH Frame Test</h1>
    </>
  );
}
