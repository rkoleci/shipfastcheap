import { notFound } from 'next/navigation';

export default function NotFound() {
  return <div>404 not found</div>;
}

export default function NotFoundCatchAll() {
  notFound();
}