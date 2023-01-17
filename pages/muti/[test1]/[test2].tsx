import { useRouter } from 'next/router';

// Dynamic Routes - Multiple segments
// ex) http://localhost:3000/muti/1/2
export default function MovieDetail() {
	const router = useRouter();
	console.log(router.query);
	return 'Multiple segments';
}
