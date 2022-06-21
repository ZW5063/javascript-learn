export default function jia (...args) {
  return args.reduce((x, y) => {
    return x + y;
  }, 0)
}