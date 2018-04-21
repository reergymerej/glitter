# Glitter

This helps you make dummy commits in your Git repo.  That can be useful when
learning Git.


## Usage

These commands...

```sh
glitter 1
glitter 2 colors
glitter 3 flowers
glitter 4 elements
glitter 5 numbers
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

This will write changes to a `glitter` file so they are not just empty commits.
This is helpful when playing with rebase, as it normally [skips empty
commits](https://git-scm.com/docs/git-rebase#git-rebase---keep-empty).



## Install

```
yarn global add reergymerej.glitter
```

After that, just call it anywhere.

```
glitter 6
```
