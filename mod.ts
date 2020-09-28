import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const port = 8000;

app.use(async (ctx, next) => {
  await next();
  console.log(ctx.request.url.href);
  console.log(`${ctx.request.method} request came in from ${ctx.request.ip}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

app.use((ctx) => {
  ctx.response.body = `
  o               .        ___---___                    .                   
       .              .--\\        --.     .     .         .
                    ./.;_.\\     __/~ \\.     
                   /;  / .-'  __\\    . \\                            
 .        .       / ,--'     / .   .;   \\        |
                 | .|       /       __   |      -O-       .
                |__/    __ |  . ;   \\ | . |      |
                |      /  \\\\_    . ;| \\___|    
   .    o       |      \\  .~\\\\___,--'     |           .
                 |     | . ; ~~~~\\_    __|
    |             \\    \\   .  .  ; \\  /_/   .
   -O-        .    \\   /         . |  ~/                  .
    |    .          ~\\ \\   .      /  /~          o
  .                   ~--___ ; ___--~       
                 .          ---         .              -PLANETS API`;
});

if (import.meta.main) {
  await app.listen({
    port,
  });
}
