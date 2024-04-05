export default async function example() {
	await new Promise(resolve => setTimeout(resolve, 100));

	return new Response(JSON.stringify({
		success: true,
		error: null,
	}), {
		headers: { 'Content-Type': 'application/json' },
		status: 200,
	});
}
