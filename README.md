# Glitter

This helps you make dummy commits in your Git repo.  That can be useful when
learning Git.


## Usage

These commands...

```sh
./glitter.js 1
./glitter.js 2 colors
./glitter.js 3 flowers
./glitter.js 4 elements
./glitter.js 5 numbers
```

would give you a history similar to this...
```
96305a1 (HEAD -> demo) one
7c698bf two
639006b zero
f996f43 six
394ce8e three
51af663 Helium
d193947 Lawrencium
8573d58 Palladium
1795b27 Technetium
4465bec lily
d3dfb26 orchid
2a66ca3 lily
71daa7c orange
1255b63 violet
e1d47dc Change five experimental Nickel
```


## Install

You can symlink this to something in your path to make it available all over.

```
ln -s "$PWD/glitter.js" /usr/local/bin/glitter
```

After that, just call it anywhere.

```
glitter 6
```
