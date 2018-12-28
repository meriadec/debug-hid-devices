# debug hid devices

## requirements

- Node.js LTS (https://nodejs.org/)
- Yarn (https://yarnpkg.com/)

## install

```
yarn
```

## run

```
node index.js
```

when connecting (of having Nano S connected), it should output:

```
>> listening for devices...
>> found Ledger Nano S (path: /dev/hidraw0)
```

(path can be different on your system)
