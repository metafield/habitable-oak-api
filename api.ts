import { Router } from "https://deno.land/x/oak/mod.ts";
import { getAllPlanets } from "./models/Planets.ts";

const router = new Router();

router.get("/", (ctx) => {
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
})
  .get("/planets", (ctx) => {
    ctx.throw(501, "sorry planets not available");
    ctx.response.body = getAllPlanets();
  });

export default router;
