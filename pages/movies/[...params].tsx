import { useRouter } from 'next/router';
import { NextPageContext } from 'next';
import Seo from '@/components/Seo';

// Dynamic Routes
export default function MovieDetail() {
	const router = useRouter();
	const [title, id, url] = router.query.params || [];
	return (
		<div>
			<Seo title={title} />
			<h4>{title || 'Loading...'}</h4>
		</div>
	);
}

export function GetServerSideProps(ctx: NextPageContext) {
	console.log(ctx);
	return {
		props: {},
	};
}
