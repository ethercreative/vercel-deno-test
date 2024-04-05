#!/usr/bin/env deno run --allow-net --allow-env --allow-read --allow-sys

import example from '../../src/example.ts';

export const handler = async (req: Request) => {
	console.log(req.url);
	return await example();
};

export default handler;
