const socket = await Deno.connect({
  port: 443,
  hostname: '[fe80::1386:3003:9d30:6194]',
});

console.log(socket);
