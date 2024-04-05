#!/usr/bin/env deno run --allow-net --allow-env --allow-read --allow-sys

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import pg from 'npm:pg@8';
import example from '../../src/example.ts';

export const handler = async (req: Request) => {
	console.log(req.url, createClient, pg);
	return await example();
};

export default handler;
