## compile c to wasm
```shell
emcc -O3 -o fibonacci.js -s EXPORTED_FUNCTIONS='["_fibonacci"]' fibonacci.c
```