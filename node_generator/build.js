const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./nodes/Add.ts'], 
  bundle: true,                   
  outfile: './dist/bundle.js',    
  platform: 'node',               
}).catch(() => process.exit(1));