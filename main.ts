// news-image-20261117 entry program (Node 22, standard library only).
//
// The entry is a single picture, entry.png, kept beside this file. Running
// the program publishes it: the picture is copied, byte for byte, to an
// entry.png inside the output directory — /output under the grader, or
// $MAKEFUN_OUTPUT_DIR anywhere else:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Because it is a plain copy, two runs write exactly the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
