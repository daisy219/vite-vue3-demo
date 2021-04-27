module.exports = {
  moduleFileExtensions: ['vue', 'js', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue文件用cue-jest转换
    '^.+\\.ts$': 'ts-jest', // ts文件用ts-jest转换
  },
  // 匹配__tests__目录下的.js/.ts文件或其他目录下的xx.test.js  xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$'
}