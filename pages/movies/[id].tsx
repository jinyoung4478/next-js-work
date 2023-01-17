import { useRouter } from 'next/router';

// Dynamic Routes
export default function MovieDetail() {
	const router = useRouter();
	console.log(router);
	return 'Detail here';
}
