import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: ['https://hash-frame-test.vercel.app/spark.png'],
  image: 'https://hash-frame-test.vercel.app/incipient.png',
  post_url: 'https://hash-frame-test.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'hash-frame-test.vercel.app',
  description: 'Who am I?',
  openGraph: {
    title: 'hash-frame-test.vercel.app',
    description: 'Who Am I?',
    images: ['https://hash-frame-test.vercel.app/incipient.png'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Who Am I?</h1>
      <body>i don't know.</body>
    </>
  );
}
