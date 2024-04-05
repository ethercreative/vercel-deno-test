serve: # Run and watch a file
	deno run --allow-net --allow-env --allow-read --allow-sys --watch $(file)

test: # Test a file
	deno test --allow-net --allow-env --allow-read --allow-sys --trace-leaks $(file)
